import { ChangeDetectorRef, Component } from '@angular/core';

import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceFilePath: string = '';
  destinationPath: string = '';
  constructor(private electron: ElectronService, private cdr: ChangeDetectorRef){
    this.electron.getIPC().on('selected-source-path',(event, response:any)=>{
      this.sourceFilePath = response.filePath;
      this.cdr.detectChanges();
    });
    this.electron.getIPC().on('selected-destination-path',(event, response:any)=>{
      this.destinationPath = response.destinationPath;
      this.cdr.detectChanges();
    });
  }

  showSourceDialog(){
    this.electron.getIPC().send('show-source-dialog');
  }

  showDestinationDialog(){
    this.electron.getIPC().send('show-destination-dialog');
  }
}
