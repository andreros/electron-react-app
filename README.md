# Electron with React Example Application

This application is a cross-platform desktop app built with Electron, React 19 and TypeScript, using Sass for styling and PNPM as the package manager. The frontend is bundled with Rsbuild. 

The project uses a monorepo folder structure with separate `main` and `renderer` packages: 
- The main package contains the Electron main process and a secure preload.ts script that exposes IPC-safe APIs to the React app; 
- The renderer package contains the React SPA, styled with Sass and linted using Biome;

The application can be packaged through `electron-builder`. For the application distributables creation, please read the section below.

## Tech stack

### Main Package
- Electron - [https://www.electronjs.org/](https://www.electronjs.org/)
- Typescript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Electron-builder - [https://www.electron.build/](https://www.electron.build/)

### Renderer Package
- React 19 - [https://react.dev/](https://react.dev/)
- Typescript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Sass - [https://sass-lang.com/](https://sass-lang.com/)
- Rsbuild - [https://rsbuild.dev/](https://rsbuild.dev/)

### Project
- BiomeJS - [https://biomejs.dev/](https://biomejs.dev/)

## Application scripts

```bash
# Run the application in development mode
pnpm dev
```

```bash
# Run linter and fix problems automatically
pnpm lint:fix
```

## Distributables creation

To produce a distributable version of this Electron application for Windows, Linux, and macOS, please check the following scripts. The application will be packaged for multi-platform. The distributables will be generated under the folder `packages/main/dist/`.


```bash
# Build React frontend
pnpm --filter renderer build
```

```bash
# Build Electron main
pnpm --filter main build
```

```bash
# Package app (local dirs)
pnpm --filter main run dist
```

```bash
# Create distributables	
pnpm --filter main run dist:mac

pnpm --filter main run dist:windows

pnpm --filter main run dist:linux

# or
pnpm --filter main run dist:all
```

```bash
# Run the whole process at once
pnpm build && pnpm --filter main run dist:mac

pnpm build && pnpm --filter main run dist:windows

pnpm build && pnpm --filter main run dist:linux

# or
pnpm build && pnpm --filter main run dist:all
```
