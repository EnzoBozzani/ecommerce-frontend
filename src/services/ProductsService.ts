interface GetProductsParams {
	name?: string;
	param: 'price' | 'num_favorites';
	order: 'ASC' | 'DESC';
	page: number;
	perPage: number;
}

export default class ProductsService {
	static async getFeaturedProducts() {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/products/featured`);
		return res.json();
	}

	static async getProducts({ name, param, order, page, perPage }: GetProductsParams) {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASEURL}/products?${
				name ? `name=${name}` : null
			}&order=${order}&param=${param}&page=${page}&perPage=${perPage}`
		);
		return res.json();
	}

	static async getProductByID(productId: number) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/products/${productId}`);

		return res.json();
	}
}
