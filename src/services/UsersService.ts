export default class UsersService {
	static async getUserData() {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/current`, {
			method: 'GET',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return res.json();
	}
}
