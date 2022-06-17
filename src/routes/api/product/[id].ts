import { product } from '../../../controller/product';

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }: any) {
	const response = await product(params.id);
	return {
		body: response
	}
}
