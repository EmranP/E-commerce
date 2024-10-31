// ! GET Shop
interface MediaShop {
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

interface Shops {
	id: string
	name: string
	address: string
	productsCount: number
	categoriesCount: number
	medias: MediaShop[]
}

export interface ApiGetShopResponse {
	message: string
	count: number
	shops: Shops[]
}

//! Get ShopById

interface ShopById {
	id: string
	name: string
	ownerFirstName: string
	email: string
	region: string
	city: string
	address: string
	phoneNumber: string
	username: string
}

export interface ApiGetShopByIdResponse {
	message: string
	shop: ShopById[]
}

// ! Get ShopCustomerById
interface ShopCustomerOptions {
	id: string
	title: string
	language: string
}

interface ShopProducts {
	id: string
	medias: MediaShop[]
	averageRating: number
	countOfReviews: number
	price: number
	installmentPurchase: boolean
	installmentPrice: number
	options: ShopCustomerOptions[]
}

interface ShopCustomer {
	name: string
	workTime: string
	averageRating: number
	phoneNumber: string
	productsCount: number
	categoriesCount: number
	medias: MediaShop[]
	createdAt: string
	products: ShopProducts[]
}

export interface ApiGetShopCustomerByIdResponse {
	message: string
	shop: ShopCustomer
}
