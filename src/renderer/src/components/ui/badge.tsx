import { forwardRef } from "react";
import clsx from "clsx";
import React from "react";

interface IProps {
  content: string;
  type?: "primary" | "secondary" | "outline" | "danger" | "warn" | "custom";
  shape?: "donut" | "pill";
  size?: "default" | "sm" | "md" | "large";
}
type Ref = HTMLDivElement;

export type BadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IProps;

const Badge = forwardRef<Ref, BadgeProps>((props, ref) => {
  const {
    content,
    className,
    shape = "donut",
    size = "default",
    color = "bg-white",
    ...rest
  } = props;

  const shapeVariant = {
    donut: "rounded-full",
    pill: "rounded-md",
  };

  const sizeVariant = {
    default: "w-full max-w-lg px-4 py-2.5",
    sm: " w-full max-w-md px-4 py-2.5",
    md: "w-full px-4 py-2.5 max-w-3/5",
    large: "w-full px-4 py-2.5 max-w-2xl",
  };

  const typeOptions = {
    primary: clsx(
      `flex items-center cursor-pointer justify-center text-[10px] bg-blue-500  text-gray-100   `
    ),
    secondary: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-[10px]  bg-purple-500 text-white `
    ),
    outline: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-[10px]  bg-transparent border border-gray-300  text-white `
    ),
    ghost: clsx(
      `flex items-center cursor-pointer justify-center text-black font-medium text-[10px] bg-[#737373] text-white `
    ),
    danger: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-[10px] text-red-500 bg-red-200  `
    ),
    warn: clsx(
      `flex items-center cursor-pointer justify-center font-medium text-[10px] text-red-500 bg-red-200  `
    ),
    custom: clsx("flex items-center cursor-pointer justify-center", className),
  };
  return (
    <div
      ref={ref}
      className={clsx(className, sizeVariant[size], shapeVariant[shape], color)}
      {...rest}
    >
      {content}
    </div>
  );
});

Badge.displayName = "Badge";
export default Badge;
