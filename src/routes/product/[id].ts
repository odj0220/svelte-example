import { product } from '../../controller/product';

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }: any) {
	// locals.userid comes from src/hooks.js
	const response = await product(params.id);

	return {
		body: {
			product: response
		}
	};
};
