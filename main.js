const electron = require('electron');   
const { app, BrowserWindow } = electron;

let win

function createWindow() {
    // Create a window
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.setMenu(null);

    win.loadURL(`file://${__dirname}/dist/index.html`)


    // win.webContents.openDevTools()

    win.on('closed', function() {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    // handle for macOs
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
})