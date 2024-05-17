/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRoutes } from 'react-router-dom'
import { AuthController } from './Auth'
import { AppLayout } from '@components'
import { useWallet } from '@thirdweb-dev/react'
import { DashboardController } from './Dashboard'
import { ReferralController } from './Referral'
import { DownloadController } from './Download'

const routerBase = [
  {
    path: 'download',
    element: <AppLayout><DownloadController /></AppLayout>,
  },
]

const routerApp = [
  ...routerBase,
  {
    path: '/',
    element: <AppLayout><DashboardController /></AppLayout>,
  },
  {
    path: 'referral',
    element: <AppLayout><ReferralController /></AppLayout>,
  },
]

const routerAuth = [
  ...routerBase,
  {
    path: '*',
    element: <AppLayout><AuthController /></AppLayout>,
  },
]

export const RouterApp = () => {
  const wallet = useWallet()

  const route = useRoutes(wallet ? routerApp : routerAuth)

  return (
    <>
      {route}
    </>
  )
}
