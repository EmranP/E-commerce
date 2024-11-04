// ! Auth Shop Request

export interface ApiAuthLoginShopRequest {
	username: string
	password: string
}

export interface ApiAuthLoginShopResponse {
	message: string
	accessToken: string
	refreshToken: string
}
