import axios from 'axios'
import { API_URL_PRODUCT, BASE_URL_API } from '../../../app/constants/api'
import { CreateProductRequest } from '../types/apiPost'

export const apiCreateProduct = async (
	productData: CreateProductRequest
): Promise<void> => {
	try {
		const response = await axios.post(
			`${BASE_URL_API}${API_URL_PRODUCT}`,
			productData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		console.log('Product created successfully', response.data)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(
				'Error creating product:',
				error.response?.data || error.message
			)
		} else {
			console.error('Unexpected error:', error)
		}
	}
}

export const productDataCreate: CreateProductRequest = {
	categoryId: 'category-id-123',
	barcode: '4820024700016',
	quantity: 15,
	price: 450,
	installmentPurchase: true,
	installmentPrice: 550,
	shopId: 'shop-id-123',
	options: [
		{
			title: 'Макбук',
			description: 'Макбук M2 2022 года, память 512 ГБ SSD',
			sku: 'Макбук M2 2022 года, память 1 TБ SSD',
			language: 'ru',
		},
	],
}
