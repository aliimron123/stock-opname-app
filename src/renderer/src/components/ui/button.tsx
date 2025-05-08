import { forwardRef } from "react";
import clsx from "clsx";
import React from "react";

interface IProps {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  shape?: "chip" | "rectangle" | "pill";
  size?: "default" | "sm" | "lg" | "icon";
}
type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IProps;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type = "button",
    variant = "primary",
    shape = "pill",
    size = "default",
    className,
    children,
    ...rest
  } = props;

  const shapeVariant = {
    chip: "rounded-full",
    rectangle: "rounded-sm",
    pill: "rounded-md",
  };
  const sizeVariant = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 ",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  const variantOptions = {
    primary: clsx(
      `flex items-center cursor-pointer justify-center text-xs duration-100 delay-100 bg-blue-500 hover:bg-blue-600 text-gray-100 ease-in-out  `
    ),
    secondary: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-xs duration-100 delay-100 hover:bg-purple-400  bg-purple-500 text-white `
    ),
    outline: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-xs duration-100 delay-100  bg-transparent border border-gray-300 hover:border-slate-200 hover:border-2 text-white `
    ),
    ghost: clsx(
      `flex items-center cursor-pointer justify-center text-black font-medium text-xs duration-100 delay-100 hover:bg-[#737373] hover:text-white `
    ),
    danger: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-xs duration-100 delay-100 text-red-500 bg-red-200 hover:bg-red-100 `
    ),
  };

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(className, variantOptions[variant], sizeVariant[size], shapeVariant[shape])}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
