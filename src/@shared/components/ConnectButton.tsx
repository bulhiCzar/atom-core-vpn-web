import { ConnectWallet, useWallet } from '@thirdweb-dev/react'
import React from 'react'
import { ConnectWalletProps } from '@thirdweb-dev/react/dist/declarations/src/wallet/ConnectWallet/ConnectWallet'

export const ConnectButton: React.FC<ConnectWalletProps> = (props) => {
  const wallet = useWallet()

  return (
    <ConnectWallet
      className={!wallet ? '!rounded-lg g-blue !text-white !text-sm hover:opacity-85' : ''}
      {...props}
    />
  )
}
