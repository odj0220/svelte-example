import { list } from '../../controller/product';

export const get = async () => {
	const products = await list();

	return {
		body: {
			products: products
		}
	};
};
