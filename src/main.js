const { app, BrowserWindow } = require('electron');
const path = require("path");
const express = require("./api/server");

const index = path.join(__dirname, 'front-end', 'index.html')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(index)
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})