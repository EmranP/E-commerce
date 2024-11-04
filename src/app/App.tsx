import iconReact from '@assets/react.svg'
import { FC, useEffect, useState } from 'react'
import {
	apiCreateProduct,
	productDataCreate,
} from '../entities/Product/api/apiCreate'
import { useApiGetProduct } from '../entities/Product/api/apiGet'

export const App: FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { products, requestGetAllProducts } = useApiGetProduct(setIsLoading)

	const createProductHandler = () => apiCreateProduct(productDataCreate)

	useEffect(() => {
		requestGetAllProducts()
	}, [])
	return (
		<>
			<h1 className='text-2xl'>App e-commerce branch dev</h1>
			<img src={iconReact} alt='' />
			<div className='text-center'>
				<h1>Test get data product</h1>
				<button
					className='bg-black p-2 rounded-2xl'
					onClick={createProductHandler}
				>
					test create
				</button>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					products.map(product => (
						<>
							<h1>{product.count}</h1>
							{product.products.map(productItem => (
								<div key={productItem.id}>
									{productItem.options.map(item => (
										<div key={item.id}>
											<h1>{item.title}</h1>
										</div>
									))}
								</div>
							))}
						</>
					))
				)}
			</div>
		</>
	)
}
