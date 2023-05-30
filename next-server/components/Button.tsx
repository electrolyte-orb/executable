import { HTMLAttributes, forwardRef, ForwardedRef } from "react";

interface ButtonProps {
  variant?: "primary" | "danger" | "secondary";
  size?: "large";
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
  let commonStyles =
    "font-medium leading-3 inline-flex items-center justify-center transition duration-[10ms]";
  let variantStyles = "";
  let sizeStyles = "";

  switch (size) {
    case "large":
      sizeStyles += "p-4 rounded text-sm";
      break;
    default:
      sizeStyles += "p-3 rounded text-sm";
      break;
  }

  switch (variant) {
    case "primary":
      variantStyles +=
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";
      break;
    case "danger":
      variantStyles += "bg-red-600 text-white hover:bg-red-500";
      break;
    case "secondary":
      variantStyles += "bg-neutral-800 text-white hover:bg-neutral-700";
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
