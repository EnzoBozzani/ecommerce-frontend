import { AdminService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props {
	data: any[];
	headers: string[];
	lastColumn: boolean;
}

export const Table: FC<Props> = ({ data, headers, lastColumn }) => {
	const router = useRouter();
	const len = headers.length;
	return (
		<div className='w-full overflow-x-auto p-12'>
			<div className='inline-block text-light min-w-full'>
				<div
					className='w-full flex flex-col max-h-[44rem] overflow-y-scroll'
					style={{ minWidth: `${len * 150}px` }}
				>
					<span className='w-full flex min-h-[5rem] font-semibold sticky top-0 z-10 bg-dark'>
						{headers.map((header) => (
							<span
								style={{ width: `${100 / len}%` }}
								key={Math.random()}
								className='flex items-center justify-center py-4'
							>
								{header}
							</span>
						))}
					</span>
					{data.map((d, index) => (
						<span
							className='w-full flex min-h-[5rem] z-0'
							key={Math.random()}
						>
							{Object.values(d).map((value: any) => (
								<span
									style={{ width: `${100 / len}%` }}
									key={Math.random()}
									className={`flex items-center justify-center py-4 text-black ${
										index % 2 === 0 ? 'bg-light' : 'bg-light/90'
									}`}
								>
									{typeof value === 'boolean' ? (
										value ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-10 h-10 text-green-500'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										) : (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-10 h-10 text-red-500'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										)
									) : (
										value
									)}
								</span>
							))}
							{lastColumn && (
								<span
									style={{ width: `${100 / len}%` }}
									className={`flex items-center justify-center py-4 text-black ${
										index % 2 === 0 ? 'bg-light' : 'bg-light/90'
									}`}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-12 h-12 text-blue-500 rounded-full hover:bg-transparent/10 p-2 cursor-pointer'
										onClick={() => router.push(`/admin/products/${d.id}`)}
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
										/>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-12 h-12 text-red-500 rounded-full hover:bg-transparent/10 p-2 cursor-pointer'
										onClick={async () => {
											const conf = confirm(`Deseja mesmo deletar o produto ${d.name}?`);
											if (conf) {
												const { message } = await AdminService.removeProductByID(d.id);
												alert(message);
												router.refresh();
											}
										}}
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
										/>
									</svg>
								</span>
							)}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
