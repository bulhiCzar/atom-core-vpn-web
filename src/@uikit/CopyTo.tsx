/* eslint-disable @typescript-eslint/no-use-before-define */
import { copyTextToClipboard } from '@utils'
import React from 'react'

interface Props {
  textCopy?: string
  position?: 'left' | 'right' | 'none'
  className?: string
}

export const CopyTo: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  textCopy,
  position = 'left',
  className = '',
}) => {
  return (
    <span
      onClick={() => textCopy && copyTextToClipboard(textCopy)}
      className={`${className} flex`}
    >
      {position === 'left' &&
        <div className="h-6 w-6 mr-4 cursor-pointer hover:bg-neutral-700/20 rounded flex justify-center items-center">
          <CopySvg />
        </div>
      }

      {children}

      {position === 'right' &&
        <div className="h-6 w-6 ml-4 cursor-pointer hover:bg-neutral-700/20 rounded flex justify-center items-center">
          <CopySvg />
        </div>
      }
    </span>
  )
}

const CopySvg = () => (
  <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="5.38867" width="9.11111" height="9.11111" rx="1.5" stroke="#737373" />
    <path
      d="M3.11111 3.52778V3C3.11111 1.89543 4.00655 1 5.11111 1H11.2222C12.3268 1 13.2222 1.89543 13.2222 3V9.21528C13.2222 10.2623 12.3734 11.1111 11.3264 11.1111V11.1111"
      stroke="#737373"
      strokeLinecap="round"
    />
  </svg>
)
