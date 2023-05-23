import { HTMLAttributes, forwardRef, ReactNode, ForwardedRef } from 'react';

interface ButtonProps {
	variant: 'primary' | 'danger' | 'secondary';
}
const Button = forwardRef(function Button(
	{
		className,
		variant,
		...props
	}: HTMLAttributes<HTMLButtonElement> & ButtonProps,
	ref: ForwardedRef<HTMLButtonElement>
) {
	let styles =
		'font-medium mt-4 px-12 py-1 text-sm rounded-md leading-5 border ';

	switch (variant) {
		case 'primary':
			styles += ' bg-blue-600 text-white text-sm border-blue-500';
			break;
		case 'danger':
			styles += 'bg-red-600 text-white text-sm border-red-500';
		default:
			break;
	}

	return (
		<button className={`${className} ${styles}`} {...props} ref={ref}></button>
	);
});
export default Button;
