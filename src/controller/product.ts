import { trendApi } from '$lib/trend_api';

export async function list() {
	const response = await trendApi('post', `api/brand/latest/product`);
	const result = response.content.map((product: any) => ({
		id: product.productId,
		code: product.code,
		displayName: product.displayName || product.name,
		price: product.price,
		wholesale: product.wholesale,
		imgPaths: product.imgPaths
	}));

	return result;
}

export async function product(id: string) {
	const response = await trendApi('get', `api/brand/product/${id}`);
	const similar = await trendApi('get', `api/brand/product/similar/image/${id}`);
	const result: any = convertDetail(response);
	result['similar'] = similar.map((product: any) => convertDetail(product));

	return result;
}

function convertDetail(product: any) {
	return {
		id: product.productId,
		displayName: product.displayName || product.name,
		price: product.price,
		wholesale: product.wholesale,
		imgPaths: product.imgPaths
	}
}
