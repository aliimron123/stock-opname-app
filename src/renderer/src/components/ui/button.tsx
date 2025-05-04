import { forwardRef } from "react";
import clsx from "clsx";
import React from "react";

interface IProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
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
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  const variantOptions = {
    primary: clsx(`inline-flex items-center justify-center  bg-blue-500 text-white text-sm`),
    secondary: clsx(`inline-flex items-center justify-center  bg-purple-500 text-white text-sm`),
    ghost: clsx(`inline-flex items-center justify-center  text-black bg-gray-100 text-sm`),
    danger: clsx(`inline-flex items-center justify-center  text-red-500 bg-red-100 text-sm`),
  };

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(variantOptions[variant], sizeVariant[size], shapeVariant[shape], className)}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
