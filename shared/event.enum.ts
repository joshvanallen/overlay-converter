export const enum ServerEvent{
    ShowSourceFileDialog = 'show-source-file-dialog',
    ShowDestinationPathDialog = 'show-destination-path-dialog',
    ExecuteConversion = 'execute-conversion'
}

export const enum ClientEvent{
    SelectedSourceFile = 'selected-source-file',
    SelectedDestinationPath = 'selected-destination-path',
    ConvertingProgress = 'converting-progress',
    ConvertComplete = 'convert-complete'
}

export const enum ConvertProgress{
    CheckingDest = 'Checking Destination',
    CreateDest = 'Creating Destination Directory',
    CheckingSource = 'Checking Source File',
    UnzippingSource = 'Extracting Content from Source',
    CreatingConfig = 'Creating OBS Scene Collection Configuration',
}