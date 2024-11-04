import axios from 'axios'
import { API_URL_COMMENT, BASE_URL_API } from '../../../app/constants/api'
import {
	CreateCommentProductRequest,
	CreateCommentShopRequest,
} from '../../types/api/comment/apiPost'

export const apiCreateCommentToProduct = async (
	commentProductData: CreateCommentProductRequest
): Promise<void> => {
	try {
		const response = await axios.post(
			`${BASE_URL_API}${API_URL_COMMENT}/to-product`,
			commentProductData,
			{ headers: { 'Content-Type': 'application/json' } }
		)
		console.log(`${response.statusText}`, response)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(
				'Error creating comment:',
				error.response?.data || error.message
			)
		} else {
			console.error('Unexpected error:', error)
		}
	}
}

export const apiCreateCommentToShop = async (
	commentShopData: CreateCommentShopRequest
): Promise<void> => {
	try {
		const response = await axios.post(
			`${BASE_URL_API}${API_URL_COMMENT}/to-shop`,
			commentShopData,
			{ headers: { 'Content-Type': 'application/json' } }
		)
		console.log(`${response.statusText}`, response)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(
				'Error creating comment:',
				error.response?.data || error.message
			)
		} else {
			console.error('Unexpected error:', error)
		}
	}
}
