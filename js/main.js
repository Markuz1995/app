const electron = require('electron')//instanciamos un objeto
const {app,BrowserWindow} = electron//asignamos variables

const path = require('path')//anexar paths
const url = require('url')//para anexar url

let win //variable global
let newWin

// funcion para abrir la ventana
function createWindow(){
 win = new BrowserWindow ({width: 800, height:600, icon:__dirname + '../build/icono.ico'})
 win.loadURL(url.format({
   pathname: path.join(__dirname,'../index.html'),
   protocol: 'file',
   slashes: true
 }))
}
exports.openWindow =() => {
  let newWin = new BrowserWindow ({width: 700,modal: true, height:500,icon:__dirname + '../build/icono.ico'})
  newWin.loadURL(url.format({
    pathname: path.join(__dirname,'../pagina1.html'),
    protocol: 'file',
    slashes: true
  }))
}
exports.openWindow2 =() => {
  let newWin = new BrowserWindow ({width: 800, height:600,icon:__dirname + '../build/icono.ico'})
  newWin.loadURL(url.format({
    pathname: path.join(__dirname,'../listar.html'),
    protocol: 'file',
    slashes: true
  }))
}


exports.openWindow3 =(id) => {
  id = id
  let newWin = new BrowserWindow ({width: 600, height:400,icon:__dirname + '../build/icono.ico'})
  newWin.loadURL(url.format({
    pathname: path.join(__dirname,'../revisado.html'),
    protocol: 'file',
    slashes: true
  }))
   newWin.webContents.on('did-finish-load', function() {
    newWin.webContents.send('ping', id);
  });
}

exports.openWindow4 =(id) => {
  id = id
  let newWin = new BrowserWindow ({width: 600, height:400})
  newWin.loadURL(url.format({
    pathname: path.join(__dirname,'../editar.html'),
    protocol: 'file',
    slashes: true
  }))
   newWin.webContents.on('did-finish-load', function() {
    newWin.webContents.send('ping', id);
  });
}
app.on('ready', createWindow)
