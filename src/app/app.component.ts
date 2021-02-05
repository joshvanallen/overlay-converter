import { Component } from '@angular/core';

import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private electron: ElectronService){
    console.log(this.electron);
    console.log(this.electron.getIPC());
  }

  title = 'overlay-converter';
}
