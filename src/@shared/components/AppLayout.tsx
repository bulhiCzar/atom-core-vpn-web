/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useEffect } from 'react'
import { ConnectButton } from '@components'
import { NavLink, useLocation } from 'react-router-dom'
import { useWallet } from '@thirdweb-dev/react'
import { Button, Text } from '@uikit'

interface Props {
  enabledNavbar?: boolean
}

export const AppLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  enabledNavbar,
}) => {
  const wallet = useWallet()
  const { pathname } = useLocation()

  const isNavbar = enabledNavbar ?? !!wallet

  const [open, setOpen] = React.useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const Download = useCallback(() => <>
    <div className="flex flex-col gap-2 flex-1 mb-8">
      <Text
        color="silver"
        className="text-3xl font-semibold"
      >
        Download Atom Core VPN
      </Text>
      <Text className="text-base text-white opacity-50">
        To start using Atom Core VPN, you need to download and install the application
      </Text>
    </div>

    <NavLink to="/download">
      <Button className="w-full uppercase" color="primary" onClick={() => setOpen(false)}>
        Download
      </Button>
    </NavLink>
  </>, [])

  const Navigate = useCallback(() => {
    return (
      <nav className="flex flex-col">
        <NavLink
          onClick={() => setOpen(false)}
          to="/"
          className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/' && 'bg-white bg-opacity-10'}`}
        >
          <Text className="font-light">Overview</Text>
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          to="/referral"
          className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/referral' && 'bg-white bg-opacity-10'}`}
        >
          <Text className="font-light">Affiliate program</Text>
        </NavLink>
      </nav>
    )
  }, [pathname])

  return (
    <div className="flex min-h-screen w-full flex-col p-2 ">
      <div className="flex flex-col gap-4 relative b-gray">
        <header
          className="rounded-lg border-neutral-700 border py-4 md:px-16 px-4 bg-black sticky top-2 z-30 flex h-20 items-center gap-4"
          style={{
            boxShadow: '0px -54px 40px -2px rgba(0,0,0,1)',
          }}
        >
          <div className="flex items-center flex-1">
            <img
              src="/atom_logo.png"
              className="mr-4"
            />
            <span className="font-normal uppercase text-xl sm:block hidden">
              atom core VPN
            </span>
          </div>

          <ConnectButton />

          {isNavbar &&
          <>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 18L20 18"
                    stroke="#656565"
                    strokeWidth="1.9200000000000004"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#656565"
                    strokeWidth="1.9200000000000004"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#656565"
                    strokeWidth="1.9200000000000004"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>

            <aside
              className={`${!open && 'hidden'} md:hidden absolute inset-0 top-[calc(5rem+1rem)] z-30 flex flex-col gap-4 h-[calc(100dvh-7rem)]`}
            >
              <div className="p-4 rounded-lg border-neutral-700 border bg-g-gray-lite flex-1 h-dvh">
                <Navigate />
              </div>

              <div className="flex flex-col rounded-lg border-neutral-700 border g-gray p-4 gap-6">
                <Download />
              </div>
            </aside>
          </>
            }
        </header>
        <div className="flex gap-4 min-h-[calc(100dvh-5rem-0.5rem*2-1rem)]">
          {isNavbar &&
          <div
            className="w-72 flex-col gap-4 md:flex hidden h-[calc(100dvh-5rem-0.5rem*2-1rem)] sticky top-[calc(5rem+1.5rem)] z-30"
          >
            <aside
              className="flex flex-col h-dvh rounded-lg border-neutral-700 border bg-g-gray-lite g-gray p-4"
            >
              <Text
                color="silver"
                className="mb-12 mt-4 text-4xl font-semibold "
              >
                Client area
              </Text>
              <Navigate />
            </aside>

            <div className="w-72 h-72 flex flex-col rounded-lg border-neutral-700 border g-gray p-4">
              <Download />
            </div>
          </div>
            }

          <main className={'grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 relative'}>
            <div
              className="bg-[url('/atom_bg.png')] bg-no-repeat bg-[center_top_-1rem] absolute inset-0 top-[-6rem]"
            />
            <div className={`${open && 'opacity-0'} h-full container md:mx-auto z-[1] md:pt-10 pt-0`}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
