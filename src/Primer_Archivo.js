const {app, BrowserWindow} =   require ('electron');
const path = require('path');
const url = require('url');
 
let mainWindow
 
app.on('ready', () => {
 
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathName: path.join(__dirname,''),
        protocol: 'file',
        slashes:true
    }))
});