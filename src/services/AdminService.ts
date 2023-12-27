export default class AdminService {
	static async login(email: string, password: string) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/auth/login`, {
			method: 'POST',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		const content = await res.json();

		return content;
	}

	static async getAllProducts() {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const content = await res.json();

		return content;
	}

	static async removeProductByID(productId: number) {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'DELETE',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ productId }),
		});

		const content = await res.json();

		return content;
	}

	static async getAllUsers() {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/users`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const content = await res.json();

		return content;
	}

	static async getAllPurchases() {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/purchases`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const content = await res.json();

		return content;
	}

	static async addProduct(formData: FormData) {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'POST',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		const content = await res.json();

		return content;
	}

	static async editProduct(formData: FormData) {
		const token = sessionStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'PUT',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		const content = await res.json();

		return content;
	}
}
