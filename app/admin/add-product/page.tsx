'use client';

import { InputGroup, FileInput, SelectInput, Button, Toast } from '@/src/components';
import { AdminService } from '@/src/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function AdminAddProduct() {
	const router = useRouter();
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [files, setFiles] = useState<[File | null, File | null, File | null]>([null, null, null]);
	const [price, setPrice] = useState('');
	const [inStock, setInStock] = useState('');
	const [featured, setFeatured] = useState<string>('false');
	const [isToastOpen, setIsToastOpen] = useState(false);
	const [toastText, setToastText] = useState('');
	const [toastType, setToastType] = useState<'error' | 'success' | 'normal'>('error');

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (name === '' || desc === '' || files[0] === null || price === '' || inStock === '') {
			setToastText('Todos os campos são obrigatórios!');
			setIsToastOpen(true);
			setToastType('error');
			setTimeout(() => setIsToastOpen(false), 3000);
			return;
		}

		if (Number.isNaN(+price) || Number.isNaN(+inStock) || Number(price) <= 0 || Number(inStock) <= 0) {
			setToastText('Preço e Em Estoque devem ser números positivos maiores que 0');
			setIsToastOpen(true);
			setToastType('error');
			setTimeout(() => setIsToastOpen(false), 3000);
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('description', desc);
		formData.append('price', price);
		formData.append('in_stock', inStock);
		formData.append('featured', featured);
		formData.append('images', files[0]);
		files[1] && formData.append('images', files[1]);
		files[2] && formData.append('images', files[2]);

		const res = await AdminService.addProduct(formData);

		if (res.message) {
			setToastText(res.message);
			setIsToastOpen(true);
			setToastType('error');
			setTimeout(() => setIsToastOpen(false), 3000);
			return;
		}

		setToastText('Produto adicionado com sucesso!');
		setIsToastOpen(true);
		setToastType('success');
		setTimeout(() => {
			setIsToastOpen(false);
			router.push('/admin');
		}, 1500);
	};

	return (
		<main className='min-w-full min-h-full bg-gradient-to-b from-black to-dark py-24'>
			<Link href={'/admin'}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-12 h-12 fixed top-4 left-4 text-light'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
					/>
				</svg>
			</Link>
			<form
				encType='multipart/form-data'
				className='flex flex-col items-center gap-16 max-w-[1000px] bg-dark mx-auto rounded-2xl pt-24 pb-4'
				onSubmit={handleSubmit}
			>
				<h3 className='text-xl md:text-4xl font-semibold text-light'>Adicionar Novo Produto</h3>
				<div className='w-4/6'>
					<InputGroup
						inputType='text'
						labelFor='productName'
						labelText='Nome do Produto:'
						setValue={setName}
						value={name}
					/>
				</div>
				<div className='w-4/6'>
					<InputGroup
						inputType='text'
						labelFor='productDesc'
						labelText='Descrição do Produto:'
						setValue={setDesc}
						value={desc}
					/>
				</div>
				<section className='w-full flex flex-col justify-center items-center gap-8'>
					<FileInput
						labelFor='file1'
						labelText='Imagem 1:'
						filesArrayIndex={0}
						filesArray={files}
						setFilesArray={setFiles}
					/>
					<FileInput
						labelFor='file2'
						labelText='Imagem 2:'
						filesArrayIndex={1}
						filesArray={files}
						setFilesArray={setFiles}
					/>
					<FileInput
						labelFor='file3'
						labelText='Imagem 3:'
						filesArrayIndex={2}
						filesArray={files}
						setFilesArray={setFiles}
					/>
				</section>
				<section className='w-2/3 flex justify-between'>
					<InputGroup
						inputType='text'
						labelFor='price'
						labelText='Preço (em R$):'
						setValue={setPrice}
						value={price}
					/>
					<InputGroup
						inputType='text'
						labelFor='in_stock'
						labelText='Em estoque:'
						setValue={setInStock}
						value={inStock}
					/>
					<SelectInput
						setValue={setFeatured}
						value={featured}
					/>
				</section>
				<div className='flex flex-col gap-8 mt-8'>
					<Button
						buttonText='Adicionar'
						submit
					/>
					<Toast
						isOpen={isToastOpen}
						setIsOpen={setIsToastOpen}
						type={toastType}
						text={toastText}
					/>
				</div>
			</form>
		</main>
	);
}
