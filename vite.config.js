import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  const isDevelopment = mode === 'development';

  const port = isDevelopment ? Number(env.VITE_LOCAL_PORT) || 3000 : Number(env.VITE_PORT) || 3000;

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: port,
    },
    build: {
      outDir: 'build'
    }
  }
})