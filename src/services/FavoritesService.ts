export default class FavoritesService {
	static async saveFavorite(productId: number) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/favorites`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ productId }),
		});

		return res.json();
	}

	static async deleteFavorite(productId: number) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/favorites`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ productId }),
		});
	}

	static async isProductFavorited(productId: number) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/isFavorited?id=${productId}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}

	static async getUserFavorites() {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/favorites`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}
}
