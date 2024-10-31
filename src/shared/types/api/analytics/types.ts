// !Count
export interface IProductsCount {
	productsCount: number
}
export interface ICustomersCount {
	customersCount: number
}
export interface IShopsCount {
	shopsCount: number
}

// !TOPS

// ! Products
interface ITopProductsOptions {
	id: string
	productId: string
	title: string
	description: string
	sku: string
	language: string
}

interface ITopProducts {
	id: string
	options: ITopProductsOptions[]
	totalNumberOfPurchases: number
	numberOfInstallmentPurchases: number
	totalVisits: number
}

export interface ApiAnalyticsProductsResponse {
	topProducts: ITopProducts[]
}

// !SHOP
interface ITopShops {
	name: string
	sales: number
	productsCount: number
}

export interface ApiAnalyticsTopShopsResponse {
	topShops: ITopShops[]
}

// !Payment
interface IPaymentStatistic {
	paymentType: string
	date: string
	totalOrders: number
	totalAmount: number
}

export interface ApiAnalyticsPaymentStatisticResponse {
	statistic: IPaymentStatistic[]
}

export interface ApiAnalyticsPaymentAmountResponse {
	total: number
	cash: number
	installment: number
	full: number
}

// !TOP-SOLD
interface ISolidTopProductsOptions {
	id: string
	productId: string
	title: string
	description: string
	sku: string
	language: string
}

interface ISolidTopProducts {
	options: ISolidTopProductsOptions[]
	totalNumberOfPurchases: number
}

export interface ApiAnalyticsSolidTopProductsResponse {
	topProducts: ISolidTopProducts[]
}

// !CATEGORIES
interface ICategoriesStatisticOptions {
	id: string
	categoryId: string
	title: string
	language: string
}

interface ICategoriesStatistic {
	id: string
	options: ICategoriesStatisticOptions[]
	sales: number
}

export interface ApiAnalyticsCategoriesStatisticResponse {
	categories: ICategoriesStatistic[]
	count: number
}
