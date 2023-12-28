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

		return res.json();
	}

	static async getAllProducts() {
		const token = localStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}

	static async removeProductByID(productId: number) {
		const token = localStorage.getItem('ecommerce-admin-token');

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

		return res.json();
	}

	static async getAllUsers() {
		const token = localStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/users`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}

	static async getAllPurchases() {
		const token = localStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/purchases`, {
			method: 'GET',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}

	static async addProduct(formData: FormData) {
		const token = localStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'POST',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		return res.json();
	}

	static async editProduct(formData: FormData) {
		const token = localStorage.getItem('ecommerce-admin-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/products`, {
			method: 'PUT',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		return res.json();
	}
}
