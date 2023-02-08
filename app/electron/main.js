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
    height: 600
  });

  // Load our HTML file
  window.loadFile("index.html");
});