import {Injectable} from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
    providedIn:'root'
})
export class IPCClient {
    constructor(private electron: ElectronService){}
    send(topicID: string, ...args:any[]){
        this.electron.getIPC().send(topicID, args);
    }
}