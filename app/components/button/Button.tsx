"use client"

import { classNames } from "@/helpers/classnames"

import type { ButtonProps } from "./Button.types"

export default function Button({
  children,
  onClick,
  className,
  icon,
  shadowed,
  title,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        `rounded-full text-md text-white bg-black hover:bg-gray-700/80 dark:bg-white dark:hover:bg-slate-200/50 transition-all duration-300 ${className}`,
        {
          "py-2 px-5": !icon,
          "p-3 flex justify-center items-center": icon,
          "shadow-lg shadow-slate-500/40 hover:shadow-slate-600/40 hover:shadow-xl":
            shadowed,
        },
      )}
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  )
}
