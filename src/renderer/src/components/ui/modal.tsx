import { forwardRef } from "react";
import clsx from "clsx";
import React from "react";

interface IProps {
  title?: string;
  open: string | boolean | string[];
  onClose: () => void;
  size?: "default" | "sm" | "md" | "large";
  backgroundColor?: "string";
}
type Ref = HTMLDivElement;

export type ModalProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IProps;

const Modal = forwardRef<Ref, ModalProps>((props, ref) => {
  const {
    title,
    open,
    onClose,
    className,
    size = "default",
    backgroundColor = "bg-white",
    children,
    ...rest
  } = props;

  const [showModal, setShowModal] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setShowModal(true), 10); // Delay to trigger animation
    } else {
      setShowModal(false);
      setTimeout(() => setShouldRender(false), 300); // Hide after animation completes
    }
  }, [open]);

  const handleClose = () => {
    setShowModal(false); // Start close animation
    setTimeout(() => {
      onClose(); // Actually close after animation finishes
    }, 300); // Match the animation duration
  };
  if (!shouldRender) return null;

  const sizeVariant = {
    default: "w-full max-w-lg px-4 py-2.5",
    sm: " w-full max-w-md px-4 py-2.5",
    md: "w-full px-4 py-2.5 max-w-3/5",
    large: "w-full px-4 py-2.5 max-w-2xl",
    full: "max-w-1/2 w-full px-4 py-2.5",
  };

  return (
    <>
      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#00000080] bg-opacity-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${sizeVariant[size]} shadow-2xs drop-shadow-2xl border-white ${backgroundColor} border rounded-md `}
          >
            <div className="flex flex-row justify-between">
              <p>{title}</p>
              <button onClick={() => handleClose()}>X</button>
            </div>

            <div ref={ref} className={clsx(className)} {...rest}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Modal.displayName = "Modal";
export default Modal;
