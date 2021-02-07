import { BrowserWindow, dialog, ipcMain, IpcMessageEvent, ipcRenderer } from "electron";
import { OpenDialogReturnValue } from "electron/main";

ipcMain.on('show-source-dialog', async ()=>{
    const filePath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!, {
        filters:[{
            name:'Overlays',
            extensions:['overlay']
        }]
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);
    // event.send('selected-source-path',{
    //     filePath
    // })

    BrowserWindow.getFocusedWindow()?.webContents.send('selected-source-path',{
        filePath
    });
});

ipcMain.on('show-destination-dialog', async ()=>{
    const directoryPath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!,{
        properties: ['openDirectory']
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);

    BrowserWindow.getFocusedWindow()?.webContents.send('selected-destination-path',{
        destinationPath: directoryPath
    })
});