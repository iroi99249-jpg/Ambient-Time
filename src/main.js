const { app, BrowserWindow, powerMonitor } = require("electron");
const path = require("node:path");

let mainWindow;
let idleTimer;
const DEFAULT_IDLE_MS = 5 * 60 * 1000;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 620,
    show: true,
    backgroundColor: "#090d16",
    title: "Ambient Time",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  mainWindow.loadFile(path.join(__dirname, "..", "ui-prototype", "index.html"));
}

function startIdleMonitor() {
  const check = () => {
    clearTimeout(idleTimer);
    const idleSeconds = powerMonitor.getSystemIdleTime();
    const remaining = Math.max(0, DEFAULT_IDLE_MS - idleSeconds * 1000);
    idleTimer = setTimeout(() => {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.setFullScreen(true);
        mainWindow.show();
        mainWindow.focus();
      }
    }, remaining);
  };
  check();
  setInterval(check, 1000);
}

app.whenReady().then(() => {
  createWindow();
  startIdleMonitor();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
