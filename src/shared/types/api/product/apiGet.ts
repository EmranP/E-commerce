// Тип для опций продукта
export interface ProductOption {
	id?: string // уникальный ID опции, возвращается в ответах сервера
	productId?: string // ID продукта, к которому относится опция
	title: string // название продукта
	description?: string // описание продукта
	sku?: string // уникальный идентификатор товара (Stock Keeping Unit)
	language: string // язык опции
}

// Тип для медиафайлов, связанных с продуктом
interface ProductMedia {
	id: string // уникальный ID медиафайла
	fileName: string // имя файла медиа
	filePath: string // путь к файлу
	size: string // размер файла в байтах
	mimeType: string // MIME-тип файла (например, image/jpeg)
	originalName: string // исходное имя файла
	categoryId: string // ID категории, связанной с медиа
	shopId: string // ID магазина, связанного с медиа
	productId: string // ID продукта, связанного с медиа
	mediaType: string // тип медиа (например, IMAGE, VIDEO)
}

// Тип для информации о магазине продукта
interface ProductShop {
	id: string // уникальный ID магазина
	name: string // название магазина
}

// Основной тип продукта
interface Product {
	id: string // уникальный ID продукта
	options: ProductOption[] // массив опций продукта
	medias: ProductMedia[] // массив медиафайлов продукта
	categoryId: string // ID категории продукта
	averageRating: number // средний рейтинг продукта
	countOfReviews: number // количество отзывов на продукт
	barcode: string // штрих-код продукта
	quantity: number // доступное количество продукта
	price: number // цена продукта
	installmentPurchase: boolean // доступность покупки в рассрочку
	installmentPrice?: number // цена в случае рассрочки
	shopId: string // ID магазина, в котором продается продукт
	totalNumberOfPurchases: number // общее количество покупок продукта
	numberOfInstallmentPurchases: number // количество покупок продукта в рассрочку
	totalVisits: number // общее количество просмотров продукта
	shop?: ProductShop // информация о магазине, связанная с продуктом (необязательное поле)
}

// Ответ для GET запроса api/product/${id}
export interface GetProductByIdResponse {
	message: string // сообщение о статусе операции
	product: Product // объект продукта с полной информацией
}

// Ответ для GET запроса api/product/customer
export interface GetCustomerProductsResponse {
	message: string // сообщение о статусе операции
	products: Pick<
		Product,
		| 'id'
		| 'medias'
		| 'averageRating'
		| 'countOfReviews'
		| 'price'
		| 'installmentPurchase'
		| 'installmentPrice'
		| 'options'
	>[] // массив продуктов с ограниченной информацией
	count: number // количество продуктов
}

// Ответ для GET запроса api/product/customer/${id}
export interface GetCustomerProductByIdResponse {
	id: string // уникальный ID продукта
	medias: ProductMedia[] // массив медиафайлов продукта
	averageRating: number // средний рейтинг продукта
	countOfReviews: number // количество отзывов
	price: number // цена продукта
	options: ProductOption[] // массив опций продукта
	shop: ProductShop // информация о магазине, связанная с продуктом
}
