import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: '/src'}],
  },
  build: {
    chunkSizeWarningLimit: 100000000,
    rollupOptions: {
      output: {
        dir: 'build',
      },
    },
  },
});
