import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // aceita conexões externas (necessário p/ tunnel)
    port: 5173,
    strictPort: true,

    // ✅ Libera qualquer host (inclui *.trycloudflare.com, domínios próprios etc.)
    // Se preferir, troque por: ['.trycloudflare.com', 'app.sunfertech.com.br']
    allowedHosts: true,

    // ✅ HMR usa o host atual (do tunnel). Não defina "hmr.host".
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
  preview: { host: true, port: 5173 },
})
