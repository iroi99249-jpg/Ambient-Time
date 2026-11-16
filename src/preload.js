const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("ambientTime", Object.freeze({
  appName: "Ambient Time",
  version: "0.1.0",
  locale: "ja-JP"
}));
