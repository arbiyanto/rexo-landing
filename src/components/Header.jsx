'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MobileNavLink(props) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-gray-700 hover:text-teal-600 py-2 transition-colors duration-200"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-teal-50 hover:text-teal-600 focus:not-data-focus:outline-hidden active:text-teal-700 transition-colors duration-200"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5" />
                      ) : (
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-white px-6 pt-32 pb-6 shadow-xl shadow-gray-900/10"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">
                              Fitur
                            </MobileNavLink>
                            <MobileNavLink href="/#reviews">
                              Ulasan
                            </MobileNavLink>
                            <MobileNavLink href="/#pricing">
                              Harga
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQ</MobileNavLink>
                            <MobileNavLink href="/privacy">
                              Kebijakan Privasi
                            </MobileNavLink>
                            <MobileNavLink href="/terms">
                              Syarat & Ketentuan
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="mailto:admin@rexo.meduru.app" variant="outline" className="w-full justify-center">
                              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
                              Hubungi Kami
                            </Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Button href="mailto:admin@rexo.meduru.app" variant="outline">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
