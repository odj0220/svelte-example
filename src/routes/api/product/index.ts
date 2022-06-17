import {list} from '../../../controller/product';
export async function get() {
	const productList = await list();
	return {
		body: productList
	}
}
