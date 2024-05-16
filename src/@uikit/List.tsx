import React, { useId } from 'react'

interface Props {
  data?: {
    title: React.ReactNode,
    value: React.ReactNode,
  }[]
  titleVariant?: 'big' | 'small',
}

export const List: React.FC<Props> = ({
  titleVariant,
  data = [],
}) => {
  const classNameTitle = titleVariant === 'big'
    ? 'font-semibold text-xl'
    : 'font-normal text-xl'

  return (
    <div className="flex flex-col gap-4">
      {data.map(({ title, value }) => {
        return (
          // eslint-disable-next-line react-hooks/rules-of-hooks
          <React.Fragment key={useId()}>
            <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-0">
              <span className={`${classNameTitle} md:flex-1 w-full md:w-auto`}>
                {title}
              </span>

              {value}
            </div>
            <div className="border-neutral-700 border-b-2 w-full" />
          </React.Fragment>
        )
      })}
    </div>
  )
}
