const { app, BrowserWindow } = require('electron');
const path = require('path');

//Define window
const createWindow = () => {
    const win = new BrowserWindow({
        width : 640,
        height : 480,
        //Preload code
        webPreferences: { preload: path.join(__dirname, 'preload.js')}
    });

    //HTML to load
    win.loadFile('index.html');
}

//Set script to run when application is ready.
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});