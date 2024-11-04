export interface ApiRegistrationCustomerAuthRequest {
	firstName: string
	phoneNumber: string
	email: string
	password: string
	region: string
	city: string
	firstAddress: string
	secondAddress: string
}

export interface ApiRegistrationCustomerAuthResponse {
	message: string
	customerId: string
}
