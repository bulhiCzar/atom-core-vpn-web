import React from 'react'
import { ConnectButton, Text } from '@components'
import { NavLink, useLocation } from 'react-router-dom'
import { useWallet } from '@thirdweb-dev/react'
import { Button } from '@uikit'

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const wallet = useWallet()

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
          {/* <Sheet> */}
          {/*  <SheetTrigger asChild> */}
          {/*    <Button size="icon" variant="outline" className="sm:hidden"> */}
          {/*      <PanelLeft className="h-5 w-5" /> */}
          {/*      <span className="sr-only">Toggle Menu</span> */}
          {/*    </Button> */}
          {/*  </SheetTrigger> */}
          {/*  <SheetContent side="left" className="sm:max-w-xs"> */}
          {/*    <nav className="grid gap-6 text-lg font-medium"> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base" */}
          {/*      > */}
          {/*        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" /> */}
          {/*        <span className="sr-only">Acme Inc</span> */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" */}
          {/*      > */}
          {/*        <Home className="h-5 w-5" /> */}
          {/*        Dashboard */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" */}
          {/*      > */}
          {/*        <ShoppingCart className="h-5 w-5" /> */}
          {/*        Orders */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="flex items-center gap-4 px-2.5 text-foreground" */}
          {/*      > */}
          {/*        <Package className="h-5 w-5" /> */}
          {/*        Products */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" */}
          {/*      > */}
          {/*        <Users2 className="h-5 w-5" /> */}
          {/*        Customers */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="#" */}
          {/*        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" */}
          {/*      > */}
          {/*        <LineChart className="h-5 w-5" /> */}
          {/*        Settings */}
          {/*      </Link> */}
          {/*    </nav> */}
          {/*  </SheetContent> */}
          {/* </Sheet> */}
          <ConnectButton />
        </header>
        <div className="flex gap-4 min-h-[calc(100vh-5rem-0.5rem*2-1rem)]">
          {wallet && <div className="w-72 flex-col gap-4 md:flex hidden">
            <aside className="flex flex-col min-h-[calc(100%-18rem-1rem)] rounded-lg border-neutral-700 border bg-g-gray-lite g-gray p-4">
              <Text
                gradient="silver"
                className="my-12 text-4xl font-semibold"
              >
                Client area
              </Text>
              <nav className="flex flex-col">
                <a
                  href="/"
                  className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/' && 'bg-white bg-opacity-10'}`}
                >
                  <Text className="font-light">Overview</Text>
                </a>
                <a
                  href="/"
                  className={`mx-[calc(1rem*-1)] hover:bg-white hover:bg-opacity-10 p-4 ${pathname === '/program' && 'bg-white bg-opacity-10'}`}
                >
                  <Text className="font-light">Affiliate program</Text>
                </a>
              </nav>
              {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4"> */}
              {/*  <Tooltip> */}
              {/*    <TooltipTrigger asChild> */}
              {/*      <Link */}
              {/*        href="#" */}
              {/*        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" */}
              {/*      > */}
              {/*        <Settings className="h-5 w-5" /> */}
              {/*        <span className="sr-only">Settings</span> */}
              {/*      </Link> */}
              {/*    </TooltipTrigger> */}
              {/*    <TooltipContent side="right">Settings</TooltipContent> */}
              {/*  </Tooltip> */}
              {/* </nav> */}
            </aside>

            <div className="w-72 h-72 flex flex-col rounded-lg border-neutral-700 border g-gray p-4">
              <div className="flex flex-col gap-2 flex-1">
                <Text
                  gradient="silver"
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

            </div>
          </div>}

          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 relative">
            <div
              className="bg-[url('/atom_bg.png')] bg-no-repeat bg-[center_top_-1rem] absolute inset-0 top-[-6rem]"
            />
            <div className="h-full container z-[1]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
