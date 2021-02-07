export const enum ServerEvent{
    ShowSourceFileDialog = 'show-source-file-dialog',
    ShowDestinationPathDialog = 'show-destination-path-dialog',
    ExecuteConversion = 'execute-conversion'
}

export const enum ClientEvent{
    SelectedSourceFile = 'selected-source-file',
    SelectedDestinationPath = 'selected-destination-path',
    ConvertComplete = 'convert-complete'
}