import { jwtDecode } from 'jwt-decode';

export interface UserDecodedToken {
	id: number;
	firstName: string;
	email: string;
}

export function verifyToken(token: string, setUser: any) {
	const decoded = jwtDecode(token);
	if (decoded.exp! < Date.now() / 1000) return localStorage.clear();
	setUser(decoded);
}
