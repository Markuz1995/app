const electron = require('electron')//instanciamos un objeto
const {app,BrowserWindow} = electron//asignamos variables

const path = require('path')//anexar paths
const url = require('url')//para anexar url

let win //variable global

// funcion para abrir la ventana
function createWindow(){
 win = new BrowserWindow ({width: 800, height:600, icon:__dirname + '/poke.ico'})
 win.loadURL(url.format({
   pathname: path.join(__dirname,'../index.html'),
   protocol: 'file',
   slashes: true
 }))
}
exports.openWindow =() => {
  let newWin = new BrowserWindow ({width: 600, height:400})
  newWin.loadURL(url.format({
    pathname: path.join(__dirname,'../pagina1.html'),
    protocol: 'file',
    slashes: true
  }))
}
app.on('ready', createWindow)
