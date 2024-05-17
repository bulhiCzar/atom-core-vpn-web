import React, { forwardRef } from 'react'

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  variant?: 'bordered' | 'base' | 'text'
  color?: 'primary' | 'error'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  ...props
}, ref) => {
  const classNameBase = ' text-white px-8 py-2 rounded-xl'
  if (props.color === 'primary' && props.variant !== 'bordered') {
    className += `${classNameBase}  g-blue hover:opacity-85`
  }
  if (props.color === 'error' && props.variant === 'text') {
    className += `${classNameBase}  !text-red-600 hover:bg-red-700/25`
  }
  if (props.variant === 'bordered') {
    if (props.color === 'primary') {
      className += `${classNameBase} text-white border-purple hover:bg-purple/15 border-2 rounded-xl`
    }
  }

  return (
    <button
      type="button"
      className={className}
      {...props}
      ref={ref}
    >
      {props.children}
    </button>
  )
})
