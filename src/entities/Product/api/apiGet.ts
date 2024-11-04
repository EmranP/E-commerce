import axios from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { API_URL_PRODUCT, BASE_URL_API } from '../../../app/constants/api'
import { GetAllProducts } from '../../types/api/product/apiGet'

export const useApiGetProduct = (
	setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [products, setProducts] = useState<GetAllProducts[]>([])

	const requestGetAllProducts = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(`${BASE_URL_API}${API_URL_PRODUCT}`)
			const data = await response.data
			setProducts(prev => [...prev, data])
		} catch (error) {
			console.error(error as Error)
		} finally {
			setIsLoading(false)
		}
	}
	return { products, requestGetAllProducts }
}
