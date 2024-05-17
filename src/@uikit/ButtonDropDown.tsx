/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'

interface Props {
  title?: React.ReactNode
  data?: {
    name: string
    label: React.ReactNode
  }[]
}

export const ButtonDropDown: React.FC<Props> = ({
  data,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative cursor-pointer w-full">
      <div
        className={`flex items-center w-full text-center text-white px-8 py-2 g-blue hover:opacity-85 ${isOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1">
          {title}
        </span>

        <Triangle className={!isOpen ? 'rotate-180' : ''} />
      </div>

      <div
        className={`${!isOpen && 'hidden'} inset-x-0 absolute
        g-blue rounded-b-xl flex flex-col ease-in duration-300 transition-all
        [&>*]:p-4 *:before:absolute [&>*:hover:before]:bg-white/15 *:before:inset-0 *:relative
        `}
      >
        {data?.map(({ name, label }) =>
          <React.Fragment key={name}>
            {label}
          </React.Fragment>,
        )}
      </div>
    </div>
  )
}

const Triangle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.12584 0.573484C4.50685 -0.112325 5.49315 -0.112327 5.87416 0.573483L9.17464 6.51436C9.54494 7.18089 9.06297 8 8.30049 8L1.69951 8C0.93703 8 0.455062 7.18089 0.825358 6.51436L4.12584 0.573484Z"
      fill="white"
    />
  </svg>
)
