import { Text, ConnectButton } from '@components'

export const AuthController = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-32 justify-center items-center h-full">
        <div className="flex gap-20">
          <div className="flex flex-col text-center justify-center gap-5 w-3/6">
            <div>
              <Text gradient="silver" className="text-5xl font-bold">
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

          <img
            src="https://www.figma.com/041fe635-8734-4600-95ca-4b999a28b504"
            className="w-3/6"
          />
        </div>
        <div>
          <ConnectButton btnTitle="Login to service" />
        </div>
      </div>
    </div>
  )
}
