'use client';

import Link from 'next/link';
import { FC, FormEvent, useState } from 'react';
import { Button, InputGroup, Loader, Logo } from '..';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';

const states = [
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
];

export const BuyProductForm: FC = () => {
	const [addressCity, setAddressCity] = useState('');
	const [addressNumber, setAddressNumber] = useState('');
	const [addressComplement, setAddressComplement] = useState('');
	const [addressState, setAddressState] = useState('AC');
	const [addressStreet, setAddressStreet] = useState('');
	const [addressPostalCode, setAddressPostalCode] = useState('');
	const stripe = useStripe();
	const elements = useElements();

	if (!stripe || !elements) {
		return <Loader />;
	}

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const result = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: '',
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='mx-auto w-[95%] sm:w-[600px] bg-light shadow-lg rounded-2xl flex flex-col gap-8 px-6 sm:px-24 py-12'
		>
			<div className='w-full flex justify-center items-center'>
				<Link href={'/'}>
					<Logo className='w-16 h-16 text-primaryLight' />
				</Link>
			</div>
			<h3 className='w-full text-center font-semibold text-2xl xs:text-4xl mb-4'>Comprar Produto</h3>
			<div className='w-full flex items-center justify-between'>
				<div className='flex flex-col gap-2 me-6'>
					<label
						className='text-dark font-semibold'
						htmlFor='addressState'
					>
						Estado:{' '}
					</label>
					<select
						className='appearance-none bg-black/5 py-2 ps-2 border-2 border-dark/20 focus:outline-none focus:border-primaryLight'
						id='addressState'
						name='addressState'
						defaultValue={addressState}
						onChange={(ev) => setAddressState(ev.currentTarget.value)}
					>
						{states.map((state, i) => (
							<option
								key={i}
								value={state}
							>
								{state}
							</option>
						))}
					</select>
				</div>
				<InputGroup
					inputType='text'
					labelFor='addressCity'
					labelText='Cidade:'
					setValue={setAddressCity}
					value={addressCity}
					style='lightMode'
				/>
			</div>
			<div className='w-full'>
				<InputGroup
					inputType='text'
					labelFor='addressStreet'
					labelText='Rua/Avenida:'
					setValue={setAddressStreet}
					value={addressStreet}
					style='lightMode'
				/>
			</div>
			<div className='w-full flex items-center gap-6'>
				<InputGroup
					inputType='text'
					labelFor='addressNumber'
					labelText='Número:'
					setValue={setAddressNumber}
					value={addressNumber}
					style='lightMode'
				/>
				<InputGroup
					inputType='text'
					labelFor='addressComplement'
					labelText='Complemento:*'
					setValue={setAddressComplement}
					value={addressComplement}
					style='lightMode'
				/>
			</div>
			<div className='w-full'>
				<InputGroup
					inputType='text'
					labelFor='addressPostalCode'
					labelText='CEP: '
					setValue={setAddressPostalCode}
					value={addressPostalCode}
					style='lightMode'
					mask='cep'
				/>
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<label
					htmlFor='cardNumber'
					className='text-dark font-semibold'
				>
					Número do cartão:
				</label>
				<CardNumberElement
					id='cardNumber'
					className='w-full px-1 py-2 border-[1.75px] border-dark/20 rounded-lg bg-black/5 focus:outline-none focus:border-primaryLight'
					options={{
						style: {
							base: {
								fontSize: '16px',
								':focus': {
									backgroundColor: '#fff',
								},
							},
						},
					}}
				/>
			</div>
			<CardExpiryElement />
			<CardCvcElement />
			<Button
				buttonText='Comprar'
				submit
				style='lightMode'
			/>
			<p className='text-dark/40'>*: campo opcional</p>
		</form>
	);
};
