// Тип для позиции заказа
interface OrderItem {
	id: string // уникальный ID позиции
	orderId: string // ID заказа, к которому относится позиция
	productId: string // ID продукта
	price: number // цена за единицу
	quantity: number // количество единиц
}

// Тип для информации о магазине
interface OrderShop {
	name: string // название магазина
	ownerFirstName: string // имя владельца магазина
	city: string // город, где находится магазин
	address: string // адрес магазина
	phoneNumber: string // контактный номер телефона магазина
}

// Тип для информации о клиенте
interface OrderCustomer {
	firstName: string // имя клиента
	phoneNumber: string // контактный номер телефона клиента
	email: string // электронная почта клиента
	city: string // город проживания клиента
	firstAddress: string // адрес клиента
}

// Основной тип заказа
interface Order {
	id: string // уникальный ID заказа
	customerId?: string // ID клиента (необязательное поле)
	orderNumber: string // номер заказа
	note?: string // заметка или особое указание по заказу
	status: string // текущий статус заказа (например, CANCELLED, PAID и т.д.)
	paymentType: string // тип оплаты (например, FULL, PARTIAL)
	phoneNumber?: string // контактный номер телефона для заказа (необязательное поле)
	totalAmount: number // общая сумма заказа
	deliveryRegion?: string // регион доставки (необязательное поле)
	deliveryCity?: string // город доставки (необязательное поле)
	deliveryAddress?: string // адрес доставки (необязательное поле)
	deliveryDate: string // дата доставки заказа
	shopId?: string // ID магазина (необязательное поле)
	installmentPeriod?: number // период рассрочки, если применимо (необязательное поле)
	prepayment?: number // предоплата, если применимо (необязательное поле)
	remainingAmount?: number // оставшаяся сумма для оплаты (необязательное поле)
	orderItems: OrderItem[] // массив позиций в заказе
	shop?: OrderShop // информация о магазине (необязательное поле)
	customer?: OrderCustomer // информация о клиенте (необязательное поле)
}

// Ответ для запроса api/order/my/
export interface ApiOrdersResponse {
	message: string // сообщение о статусе операции
	count: number // количество заказов
	orders: Pick<
		Order,
		| 'id'
		| 'orderNumber'
		| 'status'
		| 'paymentType'
		| 'totalAmount'
		| 'deliveryDate'
		| 'installmentPeriod'
		| 'remainingAmount'
	>[] // сокращенная информация о заказах
}

// Ответ для запроса api/order/${orderId}
export interface ApiOrderByIdResponse {
	message: string // сообщение о статусе операции
	order: Order // полный объект заказа
}

// !Ответ для запроса GET api/order/${orderId}/customer
export interface ApiOrderCustomerResponse {
	message: string
	order: Order
}
