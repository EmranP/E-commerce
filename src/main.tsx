import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/global.css'
import { BrowserRouter } from './app/providers/routes.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter />
	</StrictMode>
)
