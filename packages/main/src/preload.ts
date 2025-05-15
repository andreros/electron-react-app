import { contextBridge, ipcRenderer } from 'electron';

// Securely expose limited APIs to the renderer (React) app
contextBridge.exposeInMainWorld('electron', {
  ping: () => ipcRenderer.invoke('ping')
});
