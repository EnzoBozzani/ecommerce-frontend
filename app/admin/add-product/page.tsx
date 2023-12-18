'use client';

import { InputGroup, FileInput, SelectInput, Button, Toast } from '@/src/components';
import { FormEvent, useState } from 'react';

export default function AdminAddProduct() {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [files, setFiles] = useState<[File | null, File | null, File | null]>([null, null, null]);
	const [price, setPrice] = useState('');
	const [inStock, setInStock] = useState('');
	const [featured, setFeatured] = useState<string>('false');
	const [isToastOpen, setIsToastOpen] = useState(false);
	const [toastText, setToastText] = useState('');

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (name === '' || desc === '' || files[0] === null || price === '' || inStock === '') {
			setToastText('Todos os campos são obrigatórios!');
			setIsToastOpen(true);
			setTimeout(() => setIsToastOpen(false), 3000);
			return;
		}

		if (Number.isNaN(price) || Number.isNaN(inStock) || Number(price) <= 0 || Number(inStock) <= 0) {
			setToastText('Preço e Em Estoque devem ser números positivos maiores que 0!');
			setIsToastOpen(true);
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
	};

	return (
		<main className='min-w-full min-h-full bg-gradient-to-b from-black to-dark py-24'>
			<form
				encType='multipart/form-data'
				className='flex flex-col items-center gap-16 max-w-[1000px] bg-dark mx-auto rounded-2xl py-24'
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
						type='error'
						text={toastText}
					/>
				</div>
			</form>
		</main>
	);
}
