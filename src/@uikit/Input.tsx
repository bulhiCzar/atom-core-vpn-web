import React from 'react'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={`${className} bg-transparent border-neutral-700 !outline-none
       border-2 rounded-xl py-4 text-base font-normal px-8 placeholder-neutral-700`}
    />
  )
}
