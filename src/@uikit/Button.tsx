import React, { forwardRef } from 'react'

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  variant?: 'bordered' | 'base' | 'text'
  color?: 'primary' | 'error'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  ...props
}, ref) => {
  let cln = ''
  const classNameBase = `text-white px-8 py-2 rounded-xl ${className}`
  if (props.color === 'primary' && props.variant !== 'bordered') {
    cln += `${classNameBase}  g-blue`
  }
  if (props.color === 'error' && props.variant === 'text') {
    cln += `${classNameBase}  !text-red-600 hover:bg-red-700/25`
  }
  if (props.color === 'error' && props.variant !== 'text') {
    cln += `${classNameBase}  hover:bg-red-700/60 bg-red-700`
  }
  if (props.variant === 'bordered') {
    if (props.color === 'primary') {
      cln += `${classNameBase} bg-transparent text-white border-purple hover:bg-[#AF6AF6] active:bg-[#6144E5] border-2 rounded-xl`
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cln}
      {...props}
    >
      {props.children}
    </button>
  )
})
