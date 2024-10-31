// !Request
export interface CreateCommentProductRequest {
	comment: string
	rating: 5
	productId: string
}
export interface CreateCommentShopRequest {
	comment: string
	rating: 5
	shopId: string
}

// !Response
export interface CreateCommentProductResponse {
	message: string
}
export interface CreateCommentShopResponse {
	message: string
}
