import { BrowserWindow, dialog, ipcMain } from "electron";
import { OpenDialogReturnValue } from "electron/main";

import { ServerEvent, ClientEvent, ConvertProgress, ResponseBuilder } from '../shared';

ipcMain.on(ServerEvent.ShowSourceFileDialog, async () => {
    const filePath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!, {
        filters: [{
            name: 'Overlays',
            extensions: ['overlay']
        }]
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);
    const response = new ResponseBuilder<any>().setStatusCode(200).setBody({
        filePath
    }).build();

    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.SelectedSourceFile, response);
});

ipcMain.on(ServerEvent.ShowDestinationPathDialog, async () => {
    const destinationPath = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow()!, {
        properties: ['openDirectory']
    }).then((value: OpenDialogReturnValue) => value.filePaths[0]);
    const response = new ResponseBuilder<any>().setStatusCode(200).setBody({
        destinationPath
    }).build();
    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.SelectedDestinationPath, response)
});

ipcMain.on(ServerEvent.ExecuteConversion, async (event, request) => {
    const { source, destination } = request.body;
    let progressResponse =  new ResponseBuilder<any>().setStatusCode(200).setBody({
        progress: ConvertProgress.CheckingSource
    }).build();
    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.ConvertingProgress,progressResponse);
    checkSource(source);

    progressResponse =  new ResponseBuilder<any>().setStatusCode(200).setBody({
        progress: ConvertProgress.CheckingDest
    }).build();
    BrowserWindow.getFocusedWindow()!.webContents.send(ClientEvent.ConvertingProgress, progressResponse);
    checkAndCreateDestination(source, destination);


});

function checkAndCreateDestination(source: string, destination: string) {

}

function checkSource(source: string) {

}