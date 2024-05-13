/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRoutes } from 'react-router-dom'
import { AuthController } from './auth'
import { AppLayout } from '@components'
import { useWallet } from '@thirdweb-dev/react'

const routerBase = [
  {
    path: 'download',
    element: <AppLayout>download page</AppLayout>,
  },
]

const routerApp = [
  ...routerBase,
  {
    path: '/',
    element: <AppLayout>main</AppLayout>,
  },
  {
    path: 'program',
    element: <AppLayout>referal progream</AppLayout>,
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
