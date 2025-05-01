'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-teal-50">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-12 w-auto" />
              <div className="ml-4">
                <p className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">Rexo</p>
                <p className="mt-1 text-sm text-gray-600">Keamanan Bisnis Rental Anda</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
            <div className="mt-8 flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-teal-600"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="sr-only">Instagram</span>
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-teal-600"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="sr-only">Twitter</span>
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-teal-600"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="sr-only">Facebook</span>
                <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
          <motion.div 
            className="group relative -mx-4 flex items-center self-stretch p-6 transition-colors hover:bg-white/90 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-teal-300 transition-colors group-hover:stroke-teal-500" />
              <FontAwesomeIcon icon={faQrcode} className="h-14 w-14 text-teal-500" />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Unduh Aplikasi Rexo
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Pindai kode QR untuk mengunduh aplikasi Rexo dari Google Play Store.
              </p>
            </div> */}
          </motion.div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-teal-600">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-teal-600">
              Syarat & Ketentuan
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()} Rexo. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </Container>
    </footer>
  )
}
