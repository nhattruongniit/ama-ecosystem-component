import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/theme',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: '.',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: resolve(__dirname, 'libs/theme/src/index.ts'),
      name: 'theme',
      // fileName: 'index',
      fileName: '[name]',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
      input: {
        index: 'libs/theme/src/index.ts',
        piano: 'libs/theme/piano/src/index.ts',
      },
    },
  },
});
