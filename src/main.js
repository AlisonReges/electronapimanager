const { app, BrowserWindow } = require('electron');
const express = require("./api/server");
const dbconfig = require("./sqlite/configs/dbconfig")

dbconfig.sync().then(()=>{
  console.log("banco de dados conectado")
})

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadURL('http://localhost:3000')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })