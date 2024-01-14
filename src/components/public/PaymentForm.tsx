'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FC } from 'react';
import { BuyProductForm } from '..';

const stripePromise = loadStripe(
	'pk_test_51NuSHdIZtSr4HcsXw0EmVRypD7uwWCsK17FqXUcm7I3El11XEqtH8OJyOUzE9P631Q2o1xvYeyYJIZjwbddw6qOv00azsHhqlB'
);

export const PaymentForm: FC = () => {
	return (
		<Elements stripe={stripePromise}>
			<BuyProductForm />
		</Elements>
	);
};
