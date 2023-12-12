export default class AdminService {
	static async login(email: string, password: string) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/admin/auth/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		});

		return res.json();
	}
}
