import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import { NotFoundPage } from '../../pages/404/NotFoundPage'
import { Analytics } from '../../pages/Analytics/Analytics'
import { App } from '../App'

const BubbleError = () => {
	const error = useRouteError()
	if (error) throw error
	return null
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <BubbleError />,
		children: [
			// 404 Page
			{
				path: '*',
				element: <NotFoundPage />,
			},
			{
				path: '',
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: 'analytics',
		element: <Analytics />,
		errorElement: <BubbleError />,
	},
	// 404 Page
	{
		path: '*',
		element: <NotFoundPage />,
	},
	{
		path: '',
		element: <NotFoundPage />,
	},
])

export const BrowserRouter = () => {
	return <RouterProvider router={router} />
}
