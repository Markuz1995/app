const remote = require('electron').remote
const main = remote.require('./main.js')


let button = document.createElement('button')//creamos un nuevo boton
button.textContent = "Open Window"
document.body.appendChild(button)

// button.addEventListener('click', () => {
//   main.openWindow()
// })
