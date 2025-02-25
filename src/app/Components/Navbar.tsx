'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="text-white z-20 relative">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#About" className="text-sm/6 font-semibold text-white hover:text-red-500">
            A PROPOS
            </a>
          <a href="#Skills" className="text-sm/6 font-semibold text-white hover:text-red-500">
            MES COMPETENCES
          </a>
          <a href="#Projects" className="text-sm/6 font-semibold text-white hover:text-red-500">
            MES PROJETS
          </a>
          <a href="#Contact" className="text-sm/6 font-semibold text-white hover:text-red-500">
            CONTACT
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              <img
                alt="logo"
                src="Nadia.jpg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 px-2 bg-gradient-to-b from-black to-gray-500 opacity-80">
                <a
                  href="#About"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-red-500"
                >
                    A PROPOS
                </a>
                <a
                  href="#Skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white  hover:text-red-500"
                >
                  COMPETENCES
                </a>
                <a
                  href="#Projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white  hover:text-red-500"
                >
                  MES PROJETS
                </a>
                <a
                  href="#Contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white  hover:text-red-500"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
