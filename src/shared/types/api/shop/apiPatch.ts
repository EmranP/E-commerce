import { ApiCreateShopRequest } from './apiPost'

export interface ApiUpdateShopByIdRequest extends ApiCreateShopRequest {
	inBlackList: boolean
}
