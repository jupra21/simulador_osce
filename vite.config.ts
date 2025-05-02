import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambiado a 3000
    strictPort: false, // Permitir que busque otro puerto si 3000 está ocupado
  },
  preview: {
    allowedHosts: ['simulador-oece.onrender.com', '.onrender.com']
  },
});
