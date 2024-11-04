// !Users
interface CustomerUsers {
	id: string
	firstName: string
	firstAddress: string
	spentMony: number
	ordersCount: number
}

export interface ApiCustomerUsers {
	message: string
	customers: CustomerUsers[]
	count: number
}

// !User ID
export interface CustomerUserId {
	firstName: string
	phoneNumber: string
	email: string
	region: string
	city: string
	firstAddress: string
	secondAddress: string
	inBlackList: boolean
}

export interface ApiCustomerUserId {
	message: string
	customer: CustomerUserId
}
