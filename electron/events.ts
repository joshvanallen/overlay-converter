import { BrowserWindow, dialog, ipcMain } from "electron";
import { OpenDialogReturnValue } from "electron/main";

import { ServerEvent, ClientEvent, ConvertProgress } from '@jva/shared';

ipcMain.on(ServerEvent.ShowSourceFileDialog, async ()=>{
    const filePath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!, {
        filters:[{
            name:'Overlays',
            extensions:['overlay']
        }]
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);

    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.SelectedSourceFile,{
        filePath
    });
});

ipcMain.on(ServerEvent.ShowDestinationPathDialog, async ()=>{
    const destinationPath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!,{
        properties: ['openDirectory']
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);
    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.SelectedDestinationPath,{
        destinationPath
    })
});

ipcMain.on(ServerEvent.ExecuteConversion, async (event, request)=> {
    const {source, destination} = request;
    console.log(source);
    console.log(destination);
   BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.ConvertingProgress, {
       progress: ConvertProgress.CheckingDest
   });

});

function checkDestination(){

}