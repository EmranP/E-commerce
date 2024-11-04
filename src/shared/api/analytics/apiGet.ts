import axios from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { API_URL_ANALYTICS, BASE_URL_API } from '../../../app/constants/api'
import { errorUnexpectedText } from '../../../app/constants/text'
import {
	ApiAnalyticsCategoriesStatisticResponse,
	ApiAnalyticsPaymentStatisticResponse,
	ApiAnalyticsProductsResponse,
	ApiAnalyticsSolidTopProductsResponse,
	ApiAnalyticsTopShopsResponse,
	ICustomersCount,
	IProductsCount,
	IShopsCount,
} from '../../types/api/analytics/types'

// !Count

// Product
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

// Customer
export const useApiAnalyticsCustomerCount = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsCountCustomer, setAnalyticsCountCustomer] = useState<
		ICustomersCount[]
	>([])

	const requestAnalyticsCountCustomer = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/customers-count`
			)
			console.log('Loaded data customer-count:', response.data)
			setAnalyticsCountCustomer(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			} else {
				console.error(`${errorUnexpectedText}`, error)
			}
		} finally {
			setIsLoading(false)
		}
	}
	return { analyticsCountCustomer, requestAnalyticsCountCustomer }
}

// Shop
export const useApiAnalyticsShopCount = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsCountShop, setAnalyticsCountShop] = useState<IShopsCount[]>(
		[]
	)
	const requestAnalyticsCountShops = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/shops-count`
			)
			console.log('Data completed to shops count', response.data)
			setAnalyticsCountShop(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsCountShop, requestAnalyticsCountShops }
}

// ! Top Analytics

// Shops
export const useApiAnalyticsTopShop = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsTopShop, setAnalyticsTopShop] = useState<
		ApiAnalyticsTopShopsResponse[]
	>([])
	const requestAnalyticsTopShop = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/shops-count`
			)
			console.log('Shops count data completed:', response.statusText)
			setAnalyticsTopShop(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsTopShop, requestAnalyticsTopShop }
}

// Product
export const useApiAnalyticsTopProduct = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsTopProduct, setAnalyticsTopProduct] = useState<
		ApiAnalyticsProductsResponse[]
	>([])
	const requestAnalyticsTopProduct = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/top-products`
			)
			console.log('Top products data completed:', response.statusText)
			setAnalyticsTopProduct(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsTopProduct, requestAnalyticsTopProduct }
}

// Sold
export const useApiAnalyticsTopSold = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsTopSold, setAnalyticsTopSold] = useState<
		ApiAnalyticsSolidTopProductsResponse[]
	>([])
	const requestAnalyticsTopSold = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/top-sold`
			)
			console.log('Sold top  data completed:', response.statusText)
			setAnalyticsTopSold(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsTopSold, requestAnalyticsTopSold }
}

// !Statics

// Payment-by-day
export const useApiAnalyticsPaymentsByDay = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsPaymentsByDay, setAnalyticsPaymentsByDay] = useState<
		ApiAnalyticsPaymentStatisticResponse[]
	>([])
	const requestAnalyticsPaymentsByDay = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/payments-by-day`
			)
			console.log('Payments-by-day data completed:', response.statusText)
			setAnalyticsPaymentsByDay(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsPaymentsByDay, requestAnalyticsPaymentsByDay }
}

// Categories
export const useApiAnalyticsCategoriesStatistic = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [analyticsCategoriesStatistic, setAnalyticsCategoriesStatistic] =
		useState<ApiAnalyticsCategoriesStatisticResponse[]>([])
	const requestAnalyticsCategoriesStatistic = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`${BASE_URL_API}${API_URL_ANALYTICS}/categories-statistic`
			)
			console.log('Payments-by-day data completed:', response.statusText)
			setAnalyticsCategoriesStatistic(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(
					'Error getting to data',
					error.response?.data || error.message
				)
			}
		}
	}
	return { analyticsCategoriesStatistic, requestAnalyticsCategoriesStatistic }
}
