'use client';

import { AdminService } from '@/src/services';
import { FC, FormEvent, useEffect, useState } from 'react';
import { Button, FileInput, InputGroup, SelectInput, Toast } from '..';
import { Product } from '@/app/admin/[id]/page';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/src/utils/verifyToken';

interface Props {
	product: Product | undefined;
}

export const AdminEditProductForm: FC<Props> = ({ product }) => {
	const router = useRouter();
	const [name, setName] = useState(product!.name);
	const [desc, setDesc] = useState(product!.description);
	const [files, setFiles] = useState<[File | null, File | null, File | null]>([null, null, null]);
	const [price, setPrice] = useState(product!.price.toString());
	const [inStock, setInStock] = useState(product!.in_stock.toString());
	const [featured, setFeatured] = useState<string>(product!.featured ? 'true' : 'false');
	const [isToastOpen, setIsToastOpen] = useState(false);
	const [toastText, setToastText] = useState('');
	const [toastType, setToastType] = useState<'error' | 'success' | 'normal'>('error');

	useEffect(() => {
		const token = localStorage.getItem('ecommerce-admin-token');
		if (!token || !verifyToken(token)) router.push('/admin/login');
	}, []);

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (name === '' || desc === '' || price === '' || inStock === '') {
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
		formData.append('productId', product!.id.toString());
		name !== product!.name && formData.append('name', name);
		desc !== product!.description && formData.append('description', desc);
		price !== product!.price.toString() && formData.append('price', price);
		inStock !== product!.in_stock.toString() && formData.append('in_stock', inStock);
		featured !== (product!.featured ? 'true' : 'false') && formData.append('featured', featured);
		files[0] && formData.append('images', files[0]);
		files[1] && formData.append('images', files[1]);
		files[2] && formData.append('images', files[2]);

		const res = await AdminService.editProduct(formData);

		if (res.message) {
			setToastText(res.message);
			setIsToastOpen(true);
			setToastType('error');
			setTimeout(() => setIsToastOpen(false), 3000);
			return;
		}

		setToastText('Produto editado com sucesso!');
		setIsToastOpen(true);
		setToastType('success');
		setTimeout(() => {
			setIsToastOpen(false);
			router.push('/admin');
		}, 1500);
	};
	return (
		<form
			encType='multipart/form-data'
			className='flex flex-col items-center gap-16 max-w-[1000px] bg-dark mx-2 my-8 lg:mx-auto rounded-2xl pt-12 pb-4'
			onSubmit={handleSubmit}
		>
			<h3 className='text-xl md:text-4xl font-semibold text-light text-center'>Adicionar Novo Produto</h3>
			<div className='w-4/6'>
				<InputGroup
					inputType='text'
					labelFor='productName'
					labelText='Nome do Produto:'
					setValue={setName}
					value={name}
					style='darkMode'
				/>
			</div>
			<div className='w-4/6'>
				<InputGroup
					inputType='textarea'
					labelFor='productDesc'
					labelText='Descrição do Produto:'
					setValue={setDesc}
					value={desc}
					style='darkMode'
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
			<section className='w-2/3 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between'>
				<div className='w-full lg:w-1/3'>
					<InputGroup
						inputType='text'
						labelFor='price'
						labelText='Preço (em R$):'
						setValue={setPrice}
						value={price}
						style='darkMode'
					/>
				</div>
				<div className='w-full lg:w-1/3'>
					<InputGroup
						inputType='text'
						labelFor='in_stock'
						labelText='Em estoque:'
						setValue={setInStock}
						value={inStock}
						style='darkMode'
					/>
				</div>
				<SelectInput
					setValue={setFeatured}
					value={featured}
				/>
			</section>
			<div className='flex flex-col w-2/3 sm:w-1/3 gap-8 mt-8'>
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
	);
};
