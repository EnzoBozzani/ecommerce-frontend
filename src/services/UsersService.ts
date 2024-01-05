interface UserUpdatableData {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
}

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

	static async updateUserData(values: UserUpdatableData) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/current`, {
			method: 'PUT',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(values),
		});

		return res.json();
	}

	static async updatePassword(newPassword: string, password: string) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/current/password`, {
			method: 'PUT',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ currentPassword: password, newPassword }),
		});

		return res.json();
	}
}
