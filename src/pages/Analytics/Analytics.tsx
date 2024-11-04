import { useEffect, useState } from 'react'
import { useApiAnalyticsProductsCount } from '../../shared/api/analytics/apiGet'

export const Analytics = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { analyticsCountProducts, requestAnalyticsCountProducts } =
		useApiAnalyticsProductsCount(setIsLoading)

	useEffect(() => {
		requestAnalyticsCountProducts()
	}, [])
	return (
		<div>
			<h1>Analytics api</h1>
			<ul>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					analyticsCountProducts.map(item => (
						<li key={item.productsCount}>{item.productsCount}</li>
					))
				)}
			</ul>
		</div>
	)
}
