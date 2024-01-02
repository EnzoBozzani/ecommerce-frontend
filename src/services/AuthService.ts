interface RegisterBody {
	firstName: string;
	lastName: string;
	phone: string;
	birth: string;
	email: string;
	password: string;
}

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

	static async register(body: RegisterBody) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/register`, {
			method: 'POST',
			headers: {
				// prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		return res.json();
	}
}
