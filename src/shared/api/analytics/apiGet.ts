import axios from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { API_URL_ANALYTICS, BASE_URL_API } from '../../../app/constants/api'
import { IProductsCount } from '../../types/api/analytics/types'

// !Count
export const useApiAnalyticsProductsCount = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsCountProducts, setAnalyticsCountProducts] = useState<
		IProductsCount[]
	>([])

	const requestAnalyticsCountProducts = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/products-count`
			)
			const data: IProductsCount[] = await response.data
			console.log(data)
			setAnalyticsCountProducts(data)
		} catch (error) {
			console.error(error as Error)
		} finally {
			setIsLoading(false)
		}
	}
	return { analyticsCountProducts, requestAnalyticsCountProducts }
}
