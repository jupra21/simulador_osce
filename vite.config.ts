import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  
  server: {
    port: 3000,
    strictPort: true, // Forzar el uso del puerto 3000
  },
  preview: {
    allowedHosts: ['simulador-oece.onrender.com', '.onrender.com']
  },
});
