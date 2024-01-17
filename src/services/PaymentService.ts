import { Token } from '@stripe/stripe-js';

interface PurchaseParams {
	addressComplement?: string;
	addressNumber: number;
	addressStreet: string;
	addressCity: string;
	addressState: string;
	addressCountry: string;
	addressPostalCode: string;
	stripeToken: string;
	productId: number;
}

export default class PaymentService {
	static async setProductAsDelivered(productId: number) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment/delivered`, {
			method: 'PUT',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ productId }),
		});

		return res;
	}

	static async buyProduct(purchaseParams: PurchaseParams) {
		const token = localStorage.getItem('ecommerce-token');

		const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`, {
			method: 'POST',
			headers: {
				//prettier-ignore
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(purchaseParams),
		});

		return res.json();
	}
}
