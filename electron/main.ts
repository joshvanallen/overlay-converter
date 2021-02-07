import { app, BrowserWindow } from "electron";
import './events';
import * as path from "path";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // Allows IPC and other APIs
        }
    });
    // mainWindow.loadFile(path.join(__dirname, "../overlay-converter/index.html"));
    mainWindow.loadURL('http://localhost:4200');
});

app.on("window-all-closed", () => {app.quit()});