import React from 'react'
import { Button, Text } from '@uikit'

interface Props {
  title: string
  description?: string
  confirmButtonText?: string
  cancelButtonText?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export const ModalConfirm: React.FC<Props> = ({
  title,
  description,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onCancel = () => null,
  onConfirm = () => null,
}) => {
  return (
    <div className="relative z-10" role="dialog">
      <div className="fixed inset-0 backdrop-blur transition-all" />

      <div className="fixed inset-0 md:left-[18.5rem] z-10 md:w-[calc(100%-18.5rem)] w-full overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative g-gray p-14 flex flex-col items-center justify-center transform overflow-hidden border-b-2 border-neutral-700 rounded-lg bg-white text-left transition-all sm:w-full sm:max-w-lg"
          >
            <Text
              className="font-semibold text-5xl mb-6 leading-tight"
              color="silver"
            >
              {title}
            </Text>

            <div className="border-b-2 border-neutral-700 w-1/2 mb-6" />

            <Text
              className="text-base font-light mb-12 text-center"
              color="white"
            >
              {description}
            </Text>
            <div className="flex gap-8 md:flex-row flex-col md:w-auto w-full">
              <Button
                color="primary"
                className="md:w-auto w-full"
                onClick={onConfirm}
              >
                {confirmButtonText}
              </Button>
              <Button
                color="error"
                className="md:w-auto w-full"
                onClick={onCancel}
              >
                {cancelButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
