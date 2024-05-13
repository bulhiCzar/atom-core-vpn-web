import React from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: 'silver' | 'blue'
}

export const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  gradient,
  className = '',
  ...props
}) => {
  if (gradient) {
    className += ` g-${gradient} bg-clip-text text-transparent inline-block`
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
