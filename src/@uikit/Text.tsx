import React from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'silver' | 'purple' | 'white'
}

export const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  color,
  className = '',
  ...props
}) => {
  if (color) {
    if (color === 'silver') { className += ' g-silver bg-clip-text text-transparent inline-block' }
    if (color === 'white') { className += ' text-white' }
    if (color === 'purple') { className += ' text-purple' }
  }

  return (
    <span
      className={className}
      {...props}
    >
      {children}
    </span>
  )
}
