import clsx from "clsx";
import React, { forwardRef } from "react";

interface IProps {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  shape?: "rectangle" | "pill";
  inputSize?: "default" | "md" | "lg" | undefined;
}
type Ref = HTMLInputElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  IProps;

const Input = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    shape = "pill",
    inputSize = "default",
    type = "text",
    className,
    ...rest
  } = props;

  const variantOptions = {
    primary: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-transparent focus:shadow-sm focus:bg-white border border-solid border-[#bbbbbb] text-black outline-none focus:border-blue-600 ease-in-out`
    ),
    secondary: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-transparent focus:shadow-sm focus:bg-white border border-solid border-[#bbbbbb] text-black outline-none focus:border-purple-600 ease-in-out`
    ),
    outline: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-transparent focus:shadow-sm border-b border-solid border-[#bbbbbb] text-black outline-none focus:border-blue-600 ease-in-out`
    ),
    ghost: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-transparent focus:shadow-sm  border border-solid border-[#bbbbbb] text-black outline-none ease-in-out`
    ),
    danger: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-transparent focus:shadow-sm focus:bg-white border border-solid border-[#bbbbbb] text-black outline-none focus:border-red-600  ease-in-out`
    ),
  };

  const shapeVariant = {
    rectangle: "rounded-sm",
    pill: "rounded-lg",
  };

  const sizeVariant = {
    default: "h-9 px-2.5 py-4",
    md: "h-10  px-2.5 py-4 ",
    lg: "h-12  px-2.5 py-4",
  };

  return (
    <input
      ref={ref}
      className={clsx(
        className,
        variantOptions[variant],
        sizeVariant[inputSize],
        shapeVariant[shape]
      )}
      type={type}
      {...rest}
    />
  );
});
Input.displayName = "Input";
export default Input;
