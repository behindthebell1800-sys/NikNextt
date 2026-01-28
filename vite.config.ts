import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      // We no longer hardcode process.env.API_KEY here to avoid overwriting 
      // the runtime environment variable injected by the hosting platform.
    },
    server: {
      port: 3000,
    },
  };
});