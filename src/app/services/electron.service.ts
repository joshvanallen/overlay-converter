import {Injectable} from '@angular/core';
import { IpcRenderer } from 'electron';
const electron = (<any>window).require('electron');

@Injectable({
    providedIn:'root'
})
export class ElectronService{
    getIPC(): IpcRenderer{
        return electron.ipcRenderer
    }
}