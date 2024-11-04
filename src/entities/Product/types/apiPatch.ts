// Тип для тела запроса PATCH api/product/${id}
export interface UpdateProductRequest {
	barcode?: string
	quantity?: number
	price?: number
	installmentPurchase?: boolean
	installmentPrice?: number
	shopId?: string
}

// Ответ для PATCH запроса api/product/${id}
export interface UpdateProductResponse {
	barcode: string // штрих-код продукта
	quantity: number // доступное количество
	price: number // цена продукта
	installmentPurchase: boolean // доступность покупки в рассрочку
	installmentPrice?: number // цена в случае рассрочки
	shopId: string // ID магазина
}
