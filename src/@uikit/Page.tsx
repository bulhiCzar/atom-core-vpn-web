import React from 'react'

interface Props {
  title?: string
  description?: string
  className?: string
}

export const Page: React.FC<React.PropsWithChildren<Props>> = ({
  description,
  title,
  children,
  className,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-4xl font-semibold">
          {title}
        </span>
        <span className="text-base font-normal opacity-50 md:mb-24 mb-6">
          {description}
        </span>
      </div>
      <div className={className}>
        {children}
      </div>
    </>
  )
}
