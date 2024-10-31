//! Тип для тела запроса PATCH api/order/${orderId}
export interface UpdateOrderRequest {
	note?: string // обновленная заметка по заказу
	status?: string // новый статус заказа
	phoneNumber?: string // новый контактный номер
	totalAmount?: number // обновленная общая сумма
	deliveryRegion?: string // обновленный регион доставки
	deliveryCity?: string // обновленный город доставки
	deliveryAddress?: string // обновленный адрес доставки
	deliveryDate?: string // обновленная дата доставки
}
