"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { ComponentProps } from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={` ${className} ${pending ? "btn-neutral" : ""}`}
      type="submit"
    >
      {pending && <span className="loading loading-spinner loading-md"></span>}
      {children}
    </button>
  );
}
