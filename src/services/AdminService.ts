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
}
