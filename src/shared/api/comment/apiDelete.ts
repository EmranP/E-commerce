import axios from 'axios'
import { API_URL_COMMENT, BASE_URL_API } from '../../../app/constants/api'

export const apiDeleteCommentById = async (
	commentId: string
): Promise<void> => {
	try {
		const response = await axios.delete(
			`${BASE_URL_API}${API_URL_COMMENT}/${commentId}`
		)
		console.log(response.statusText, response)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(`Error deleting comment:`, error)
		}
	}
}
