import { Button as ButtonUi, ButtonProps as BaseButtonProps } from '@nextui-org/button'
import { forwardRef } from 'react'

export type ButtonProps = BaseButtonProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  ...props
}, ref) => {
  if (props.color === 'primary') {
    className += ' g-blue text-white'
  }
  return (
    <ButtonUi
      {...props}
      className={className}
      ref={ref}
    />
  )
})
