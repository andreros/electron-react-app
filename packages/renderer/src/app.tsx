import type React from 'react';
import { useEffect } from 'react';

export const App: React.FC = () => {
  useEffect(() => {
    window.electron.ping().then(res => {
      console.log('Received from main:', res);
    });
  }, []);

  return <h1>Hello from React 19 + Electron!</h1>;
};
