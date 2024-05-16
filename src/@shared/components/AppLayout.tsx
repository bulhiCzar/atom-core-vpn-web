/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { ConnectButton } from '@components'
import { NavLink, useLocation } from 'react-router-dom'
import { useWallet } from '@thirdweb-dev/react'
import { Button, Text } from '@uikit'

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const wallet = useWallet()

  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div className="flex min-h-screen w-full flex-col p-2">
      <div className="flex flex-col gap-4">
        <header
          className="rounded-lg border-neutral-700 border py-4 md:px-16 px-4 bg-black sticky top-0 z-30 flex h-20 items-center gap-4"
        >
          <div className="flex items-center flex-1">
            <img
              src="/atom_logo.png"
              className="mr-4"
            />
            <span className="font-normal uppercase text-xl sm:block hidden font-cloick">
              atom core VPN
            </span>
          </div>

          <ConnectButton />

          {wallet &&
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
          }
        </header>
        <div className="flex gap-4 min-h-[calc(100vh-5rem-0.5rem*2-1rem)] relative">
          {wallet &&
            <>
              <aside
                className={`${!open && 'hidden'} md:hidden absolute inset-0 z-10 flex flex-col gap-4`}
              >
                <div className="p-4 rounded-lg border-neutral-700 border bg-g-gray-lite flex-1">
                  <Navigate />
                </div>

                <div className="flex flex-col rounded-lg border-neutral-700 border g-gray p-4 gap-6">
                  <Download />
                </div>
              </aside>

              <div className="w-72 flex-col gap-4 md:flex hidden">
                <aside
                  className="flex flex-col min-h-[calc(100%-18rem-1rem)] rounded-lg border-neutral-700 border bg-g-gray-lite g-gray p-4"
                >
                  <Text
                    color="silver"
                    className="my-12 text-4xl font-semibold"
                  >
                    Client area
                  </Text>
                  <Navigate />
                </aside>

                <div className="w-72 h-72 flex flex-col rounded-lg border-neutral-700 border g-gray p-4">
                  <Download />
                </div>
              </div>
            </>
          }

          <main className={'grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 relative'}>
            <div
              className="bg-[url('/atom_bg.png')] bg-no-repeat bg-[center_top_-1rem] absolute inset-0 top-[-6rem]"
            />
            <div className={`${open && 'opacity-0'} h-full container z-[1]`}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

const Download = () => <>
  <div className="flex flex-col gap-2 flex-1">
    <Text
      color="silver"
      className="text-3xl"
    >
      Download Atom Core VPN
    </Text>
    <Text className="text-base text-white opacity-50">
      To start using Atom Core VPN, you need to download and install the application
    </Text>
  </div>

  <NavLink to="/download">
    <Button className="w-full uppercase" color="primary">
      Download
    </Button>
  </NavLink>
</>

const Navigate = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-col">
      <NavLink
        to="/"
        className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/' && 'bg-white bg-opacity-10'}`}
      >
        <Text className="font-light">Overview</Text>
      </NavLink>
      <NavLink
        to="/referral"
        className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/program' && 'bg-white bg-opacity-10'}`}
      >
        <Text className="font-light">Affiliate program</Text>
      </NavLink>
    </nav>
  )
}
