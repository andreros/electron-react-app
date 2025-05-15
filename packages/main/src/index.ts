import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { format } from 'url';

const isDev = !app.isPackaged;

let win: BrowserWindow | null = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  if (isDev) {
    win.loadURL('http://localhost:3000'); // dev
  } else {
    const indexPath = path.join(process.resourcesPath, 'renderer/index.html');
    win.loadURL(
      format({
        pathname: indexPath,
        protocol: 'file:',
        slashes: true
      })
    );
  }

  win.webContents.openDevTools(); // Optional: show DevTools in production
};

ipcMain.handle('ping', async () => {
  return 'pong from main';
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
