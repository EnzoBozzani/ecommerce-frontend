import { FC } from 'react';

interface Props {
	data: any[];
	headers: string[];
	lastColumn?: any;
}

export const Table: FC<Props> = ({ data, headers }) => {
	const len = headers.length;
	return (
		<div className='overflow-auto mb-12 text-white'>
			<div
				className='flex flex-col max-h-96 overflow-y-scroll'
				style={{ minWidth: `${len * 150}px` }}
			>
				<span className='w-full flex h-20 font-semibold sticky top-0 z-10 bg-dark'>
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
						className='w-full flex h-20 z-0'
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
								{value}
							</span>
						))}
					</span>
				))}
			</div>
		</div>
	);
};
