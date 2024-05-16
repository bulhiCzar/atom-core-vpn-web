import Lottie, { Options } from 'react-lottie'
import { ConnectButton } from '@components'
import { Text } from '@uikit'

import AtomLottie from './atom.lottie.json'

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: AtomLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const AuthController = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-32 justify-center items-center h-full">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-8">
          <div className="flex flex-col text-center justify-center gap-5 md:w-3/6">
            <div>
              <Text color="silver" className="text-5xl font-bold">
                Dear user
              </Text>
            </div>

            <div className="border-neutral-700 border-b w-3/6 mx-auto" />

            <Text className="font-light text-base">
              To log in to your Atom Core VPN account and have access
              to all the functionality
              of your personal area,
              authorize using
              your crypto wallet
            </Text>
          </div>

          <div className="md:w-3/6 mx-36 md:mx-0">
            <Lottie
              options={defaultOptions}
            />
          </div>

        </div>
        <div>
          <ConnectButton btnTitle="Login to service" />
        </div>
      </div>
    </div>
  )
}
