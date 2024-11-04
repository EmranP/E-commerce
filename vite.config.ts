import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			// Использую абсолютный путь или путь относительно корня проекта
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://95.85.127.34',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
})
