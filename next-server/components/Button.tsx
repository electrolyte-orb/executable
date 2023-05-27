import { HTMLAttributes, forwardRef, ForwardedRef } from 'react';

interface ButtonProps {
	variant?: 'primary' | 'danger' | 'secondary';
	size?: 'large-fw' | 'large';
}
const Button = forwardRef(function Button(
	{
		className,
		variant,
		size,
		...props
	}: HTMLAttributes<HTMLButtonElement> & ButtonProps,
	ref: ForwardedRef<HTMLButtonElement>
) {
	// REMOVED: border
	// REMOVED: text-sm
	let commonStyles =
		'font-medium leading-6 inline-flex items-center justify-center transition ease-[easeOutCubic] duration-100 active:scale-95';
	let variantStyles = '';
	let sizeStyles = '';

	switch (size) {
		case 'large':
			sizeStyles += 'px-12 py-3 rounded-lg';
			break;
		case 'large-fw':
			sizeStyles += 'px-12 py-3 w-full rounded-lg';
			break;
		default:
			sizeStyles += 'px-12 py-1 text-sm rounded-md';
			break;
	}

	switch (variant) {
		case 'primary':
			variantStyles += 'bg-blue-600 text-white hover:bg-blue-700';
			break;
		case 'danger':
			variantStyles += 'bg-red-600 text-white hover:bg-red-500';
			break;
		case 'secondary':
			variantStyles +=
				'bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700';
			break;
		default:
			break;
	}

	return (
		<button
			className={`${sizeStyles} ${commonStyles} ${variantStyles} ${className}`}
			{...props}
			ref={ref}
		></button>
	);
});
export default Button;
