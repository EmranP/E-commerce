// !Category Id
interface ProductOptions {
	id: string
	productId: string
	title: string
	description: string
	sku: string
	language: string
}

// !Category
interface CategoryMedias {
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

interface CategoryOptions {
	id: string
	categoryId: string
	title: string
	language: string
}

interface Product {
	id: string
	options: ProductOptions[]
	medias: CategoryMedias[]
	categoryId: string
	averageRating: number
	countOfReviews: number
	barcode: string
	quantity: number
	price: number
	installmentPurchase: boolean
	installmentPrice: number
	shopId: string
	totalNumberOfPurchases: number
	numberOfInstallmentPurchases: number
	totalVisits: number
}

interface Category {
	id: string
	options: CategoryOptions[]
	sales: number
	medias: CategoryMedias[]
	products: Product[]
}

export interface ApiCategoryResponse {
	message: string
	count: number
	categories: Category
}

// !Category Id
