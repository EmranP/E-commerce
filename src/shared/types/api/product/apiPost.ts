import { ProductOption } from './apiGet'

// Тип для запроса POST api/product
export interface CreateProductRequest {
	categoryId: string
	barcode: string
	quantity: number
	price: number
	installmentPurchase: boolean
	installmentPrice?: number
	shopId: string
	options: Omit<ProductOption, 'id' | 'productId'>[] // массив опций продукта, без ID и productId
}

// Ответ для POST запроса api/product
export interface CreateProductResponse {
	message: string // сообщение о статусе операции
	imageId: string // ID изображения, связанного с продуктом
}
