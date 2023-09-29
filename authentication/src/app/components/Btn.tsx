import React from "react";

enum ButtonTypes {
  "button",
  "submit",
  "reset",
}

interface Props {
  type?: keyof typeof ButtonTypes;
  label?: string;
  children?: string;
  className?: string;
  onClick?: () => void;
}

export default function Btn({
  type,
  label,
  children,
  className,
  onClick,
}: Props) {
  return (
    <button
      className={`w-11/12 bg-white text-black rounded-md my-2 ${className}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {label ?? children}
    </button>
  );
}
