interface BasketMedias {
	id: string
	fileName: string
	filePath: string
	size: string
	mimeType: string
	originalName: string
	categoryId: string
	shopId: string
	productId: string
	mediaType: string
}

interface BasketOptions {
	id: string
	productId: string
	title: string
	description: string
	sku: string
	language: string
}

interface BasketProduct {
	price: number
	options: BasketOptions[]
	averageRating: number
	countOfReviews: number
	medias: BasketMedias[]
	quantity: number
}

interface BasketItems {
	id: string
	quantity: number
	product: BasketProduct
}

interface Basket {
	id: string
	totalPrice: number
	basketItems: BasketItems[]
}

export interface ApiBasketResponse {
	message: string
	basket: Basket
}
