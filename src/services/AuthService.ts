export default class AuthService {
	static async login(email: string, password: string) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, {
			method: 'POST',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		return res.json();
	}

	static async register(formData: FormData) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/register`, {
			method: 'POST',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'multipart/form-data',
			},
			body: formData,
		});

		return res.json();
	}
}
