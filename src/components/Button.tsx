import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  console.log("aaa");
  return (
    <button
      className="px-4 py-2 rounded bg-violet-400 text-white font-bold"
      {...props}
    />
  );
}
