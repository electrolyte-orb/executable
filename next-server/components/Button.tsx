import { HTMLAttributes, forwardRef, ForwardedRef } from "react";

interface ButtonProps {
  variant?: "primary" | "danger" | "secondary";
  size?: "large" | "small";
  disabled?: boolean;
}
const Button = forwardRef(function Button(
  {
    className,
    variant,
    size,
    disabled,
    ...props
  }: HTMLAttributes<HTMLButtonElement> & ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  let commonStyles =
    "font-medium leading-3 inline-flex items-center justify-center transition duration-[10ms]";

  let variantStyles = {
    primary:
      "bg-blue-600 text-white border-t border-blue-500 hover:bg-blue-700 active:bg-blue-800",
    danger: "bg-red-600 text-white border-t border-red-400 hover:bg-red-700",
    secondary:
      "bg-black border border-neutral-700 text-white hover:bg-neutral-900",
    default: "",
  };

  let sizeStyles = {
    large: "p-4 rounded text-sm",
    small: "p-2 rounded text-sm",
    default: "p-3 rounded-[5px] text-sm",
  };

  return (
    <button
      disabled={disabled}
      className={`${sizeStyles[size ?? "default"]} ${commonStyles} ${
        variantStyles[variant ?? "default"]
      } ${className}`}
      {...props}
      ref={ref}
    ></button>
  );
});
export default Button;
