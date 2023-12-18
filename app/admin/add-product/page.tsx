'use client';

import { InputGroup, FileInput } from '@/src/components';
import { useEffect, useState } from 'react';

export default function AdminAddProduct() {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [files, setFiles] = useState<[File | null, File | null, File | null]>([null, null, null]);

	useEffect(() => {
		console.log(files);
	}, [files]);

	return (
		<main className='min-w-full min-h-screen bg-gradient-to-b from-black to-dark'>
			<form
				encType='multipart/form-data'
				className='flex flex-col items-center gap-12 max-w-[1000px] bg-dark mx-auto mt-24 rounded-2xl py-12'
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
				<section className='w-full px-4 flex flex-col justify-center items-center gap-8'>
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
			</form>
		</main>
	);
}
