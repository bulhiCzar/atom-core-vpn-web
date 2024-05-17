import React from 'react'

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`${className} border-neutral-700 border-2 p-4 rounded-lg g-gray`}
    >
      {children}
    </div>
  )
}
