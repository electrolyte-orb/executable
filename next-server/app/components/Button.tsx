import { HTMLAttributes } from 'react';
interface ButtonProps {
	variant: 'primary' | 'danger' | 'secondary';
}
export default function Button({
	className,
	variant,
	...props
}: HTMLAttributes<HTMLButtonElement> & ButtonProps) {
	let styles =
		'font-medium mt-4 px-12 py-1 text-sm rounded-md leading-5 border ';

	switch (variant) {
		case 'primary':
			styles += ' bg-blue-600 text-white text-sm border-blue-400';
			break;
		case 'danger':
			styles += 'bg-red-600 text-white text-sm border-red-500';
		default:
			break;
	}

	return <button className={`${className} ${styles}`} {...props}></button>;
}
