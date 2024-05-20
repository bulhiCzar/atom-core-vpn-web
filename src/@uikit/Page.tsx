import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  title?: string
  description?: string
  className?: string
  back?: boolean
}

export const Page: React.FC<React.PropsWithChildren<Props>> = ({
  description,
  title,
  children,
  className,
  back,
}) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-4xl font-semibold flex gap-4">
          {back &&
          <div
            className="hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg width={24} height={24} className="-rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
              <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
            </svg>
          </div>
          }

          {title}
        </span>
        <span className="text-base font-normal opacity-50 md:mb-12 mb-6">
          {description}
        </span>
      </div>
      <div className={className}>
        {children}
      </div>
    </>
  )
}
