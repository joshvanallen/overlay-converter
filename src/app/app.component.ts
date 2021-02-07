import { ChangeDetectorRef, Component } from '@angular/core';

import { ServerEvent, ClientEvent } from '@jva/shared';

import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceFilePath: string = '';
  destinationPath: string = '';
  isConverting: boolean = false;
  convertingStatus: string = '';
  constructor(private electron: ElectronService, private cdr: ChangeDetectorRef){
    this.electron.getIPC().on(ClientEvent.SelectedSourceFile,(event, response:any)=>{
      this.sourceFilePath = response.filePath;
      this.cdr.detectChanges();
    });
    this.electron.getIPC().on(ClientEvent.SelectedDestinationPath,(event, response:any)=>{
      this.destinationPath = response.destinationPath;
      this.cdr.detectChanges();
    });
    this.electron.getIPC().on(ClientEvent.ConvertingProgress, (event, response)=>{
      this.convertingStatus = response.progress;
      this.cdr.detectChanges();
    });
    this.electron.getIPC().on(ClientEvent.ConvertComplete, ()=>{
      this.isConverting = false;
      this.destinationPath = '';
      this.sourceFilePath = '';
      alert('Converting Complete!');
      this.cdr.detectChanges();
    })
  }

  showSourceDialog(){
    this.electron.getIPC().send(ServerEvent.ShowSourceFileDialog);
  }

  showDestinationDialog(){
    this.electron.getIPC().send(ServerEvent.ShowDestinationPathDialog);
  }

  convertSource(){
    this.electron.getIPC().send(ServerEvent.ExecuteConversion, {
      source: this.sourceFilePath,
      destination: this.destinationPath
    });
    this.isConverting = true;
    this.cdr.detectChanges();
  }
}
