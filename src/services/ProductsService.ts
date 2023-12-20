interface GetProductsParams {
	name?: string;
	param: 'price' | 'num_favorites';
	order: 'ASC' | 'DESC';
}

export default class ProductsService {
	static async getFeaturedProducts() {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/products/featured`);
		return res.json();
	}

	static async getProducts({ name, param, order }: GetProductsParams) {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASEURL}/products?${name ? `name=${name}` : null}&order=${order}&param=${param}`
		);
		return res.json();
	}

	static async getProductByID(productId: number) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/products/${productId}`);

		const content = await res.json();

		return content;
	}
}
