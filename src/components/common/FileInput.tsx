import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
	labelFor: string;
	labelText: string;
	filesArray: [File | null, File | null, File | null];
	filesArrayIndex: 0 | 1 | 2;
	setFilesArray: Dispatch<SetStateAction<[File | null, File | null, File | null]>>;
}

export const FileInput: FC<Props> = ({ labelFor, labelText, filesArrayIndex, filesArray, setFilesArray }) => {
	return (
		<div className='flex flex-col gap-2'>
			<label
				className='text-light font-bold'
				htmlFor={labelFor}
			>
				{labelText}
			</label>
			<input
				type='file'
				className='text-light'
				onChange={(ev) =>
					setFilesArray((prevFiles) => {
						if (ev.target.files) {
							const file = ev.target.files[0];
							return [
								filesArrayIndex === 0 ? file : prevFiles[0],
								filesArrayIndex === 1 ? file : prevFiles[1],
								filesArrayIndex === 2 ? file : prevFiles[2],
							];
						}
						return prevFiles;
					})
				}
			/>
		</div>
	);
};
