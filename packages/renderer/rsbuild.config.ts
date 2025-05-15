import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  html: {
    title: 'Electron React App',
  },
  plugins: [pluginReact(), pluginSass()],
  server: {
    port: 3000,
  },
});
