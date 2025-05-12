import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],    server: {
    port: 3001,
    strictPort: false, // Permitir cambiar de puerto si 3001 está ocupado
  },
  preview: {
    allowedHosts: ['simulador-oece.onrender.com', '.onrender.com']
  },
});
