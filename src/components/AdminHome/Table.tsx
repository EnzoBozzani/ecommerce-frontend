import { FC } from 'react';

interface Props {
	data: any[];
	headers: string[];
	lastColumn?: any;
}

export const Table: FC<Props> = ({ data, headers }) => {
	const len = headers.length;
	return (
		<div className='overflow-auto mb-12 bg-dark text-white'>
			<div
				className='flex flex-col'
				style={{ minWidth: `${len * 150}px` }}
			>
				<span className='w-full flex flex-row'>
					{headers.map((header, i) => (
						<span
							style={{ width: `${100 / len}%` }}
							key={Math.random()}
						>
							{header}
						</span>
					))}
				</span>
				{data.map((d) => (
					<span
						className='w-full flex flex-row'
						key={Math.random()}
					>
						{Object.values(d).map((value: any) => (
							<span
								style={{ width: `${100 / len}%` }}
								key={Math.random()}
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
