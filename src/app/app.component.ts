import { ChangeDetectorRef, Component } from '@angular/core';

import { ElectronService } from './services/electron.service';
import { ServerEvent, ClientEvent } from '@jva/shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceFilePath: string = '';
  destinationPath: string = '';
  constructor(private electron: ElectronService, private cdr: ChangeDetectorRef){
    this.electron.getIPC().on(ClientEvent.SelectedSourceFile,(event, response:any)=>{
      this.sourceFilePath = response.filePath;
      this.cdr.detectChanges();
    });
    this.electron.getIPC().on(ClientEvent.SelectedDestinationPath,(event, response:any)=>{
      this.destinationPath = response.destinationPath;
      this.cdr.detectChanges();
    });
  }

  showSourceDialog(){
    this.electron.getIPC().send(ServerEvent.ShowSourceFileDialog);
  }

  showDestinationDialog(){
    this.electron.getIPC().send(ServerEvent.ShowDestinationPathDialog);
  }
}
