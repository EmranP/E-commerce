// Тип для информации о клиенте
interface Customer {
	firstName: string
	phoneNumber: string
	email: string
	city: string
	firstAddress: string
}

// Тип для информации о магазине
interface Shop {
	name: string
	ownerFirstName: string
	city: string
	address: string
	phoneNumber: string
}

// Тип для информации о товаре в заказе
interface OrderItem {
	id: string
	orderId: string
	productId: string
	price: number
	quantity: number
}

// Тип для информации о заказе
interface Order {
	id: string
	note: string
	installmentPeriod: number
	orderItems: OrderItem[]
}

// Основной тип для инвойса
interface Invoice {
	id: string
	customer: Customer
	shop: Shop
	order: Order
	totalAmount: number
	paymentStatus: 'PAID' | 'PENDING'
	createdAt: string
	updatedAt: string
}

// Ответ API для получения инвойсов
export interface ApiPaidInvoicesResponse {
	invoices: Invoice
	count: number
}

export interface ApiPendingInvoicesResponse {
	invoices: Invoice
	count: number
}

export interface ApiInvoiceByIdResponse {
	invoice: Invoice
}

// !Invoices - purchases
export interface ApiInvoicePurchases {
	totalSumOfInvoices: number
	totalQuantityOfInvoices: number
	sumOfPaid: number
	quantityOfPaid: number
	sumOfPending: number
	quantityOfPending: number
}
