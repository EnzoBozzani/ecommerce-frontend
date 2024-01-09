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
}
