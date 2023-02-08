const {
  app,
  BrowserWindow
} = require("electron");

// This method is called when Electron
// has finished initializing
app.whenReady().then(() => {

  // Create a new window
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  // Event listeners on the window
  window.webContents.on("did-finish-load", () => {
    window.show();
    window.focus();
  });

  // Load our HTML file
  window.loadFile("index.html");
});