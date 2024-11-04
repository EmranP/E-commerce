// !Shop
export interface ApiCreateShopRequest {
	name: string
	workTime: string
	ownerFirstName: string
	email: string
	region: string
	city: string
	address: string
	phoneNumber: string
	username: string
	password: string
}

export interface ApiCreateShopResponse {
	message: string
}

// !Shop-image by ID
export interface ApiCreateShopImageByIdResponse {
	message: string
	imageId: string
}
