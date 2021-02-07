import { app, BrowserWindow } from "electron";
import * as path from "path";

import './events';

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // Allows IPC and other APIs
        }
    });
    if(app.isPackaged){
        mainWindow.loadFile(path.join(__dirname, "../overlay-converter/index.html"));
    }else{
        mainWindow.loadURL('http://localhost:4200');
    }
});

app.on("window-all-closed", () => {app.quit()});