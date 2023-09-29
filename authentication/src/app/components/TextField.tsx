import React from "react";

enum InputTypes {
  "text",
  "password",
  "checkbox",
  "radio",
  "submit",
  "reset",
  "button",
  "file",
  "hidden",
  "image",
  "date",
  "time",
  "datetime-local",
  "month",
  "week",
  "number",
  "range",
  "color",
  "email",
  "url",
  "tel",
  "search",
}

interface Props {
  type?: keyof typeof InputTypes;
  placeholder?: string;
  required?: boolean;
  label?: string;
  value: string;
  className?: string;
  classNameInput?: string;
  id?: string;
  onChange: (value: string) => void;
}

function TextField({
  type,
  placeholder,
  required,
  label,
  value,
  className,
  classNameInput,
  id,
  onChange,
}: Props) {
  return (
    <label
      htmlFor={`text-field-${id ?? type}`}
      className={`w-11/12 m-1 ${className}`}
    >
      <span>{label}</span>
      <input
        className={`h-9 w-full border-white border-2 bg-transparent rounded-lg pl-2 ${classNameInput}`}
        type={type ?? "text"}
        placeholder={placeholder ?? ""}
        required={required ?? false}
        value={value}
        id={`text-field-${id ?? type}`}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default TextField;
