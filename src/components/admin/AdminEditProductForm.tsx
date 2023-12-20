'use client';

import { AdminService } from '@/src/services';
import { FC, FormEvent, useState } from 'react';
import { Button, FileInput, InputGroup, SelectInput, Toast } from '..';

interface Props {
	startName: string;
	startDesc: string;
	startFiles: [File | null, File | null, File | null];
	startPrice: string;
	startInStock: string;
	startFeatured: string;
}

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	images: string[];
	num_favorites?: number;
	in_stock: number;
	featured?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export const AdminAddEditForm: FC<Props> = ({
	startName,
	startDesc,
	startFiles,
	startPrice,
	startInStock,
	startFeatured,
}) => {
	const [name, setName] = useState(startName);
	const [desc, setDesc] = useState(startDesc);
	const [files, setFiles] = useState<[File | null, File | null, File | null]>(startFiles);
	const [price, setPrice] = useState(startPrice);
	const [inStock, setInStock] = useState(startInStock);
	const [featured, setFeatured] = useState<string>(startFeatured);
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
		name !== startName && formData.append('name', name);
		desc !== startDesc && formData.append('description', desc);
		price !== startPrice && formData.append('price', price);
		inStock !== startInStock && formData.append('in_stock', inStock);
		featured !== startFeatured && formData.append('featured', featured);
		files[0] && formData.append('images', files[0]);
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
			location.reload();
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
			<section className='w-2/3 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between'>
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
			<div className='flex flex-col w-2/3 sm:w-auto gap-8 mt-8'>
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
