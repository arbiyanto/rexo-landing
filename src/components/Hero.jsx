'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import screenshot from '@/images/screenshots/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#0d9488"
          strokeOpacity="0.4"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0d9488" />
            <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#0d9488"
          strokeOpacity="0.4"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0d9488" />
            <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-gradient-to-b from-white to-teal-50">
      <Container>
        <motion.div 
          className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 background-animate">
              <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                Tingkatkan Keamanan
              </span>
              <br /> Bisnis Rental Anda.
            </h1>
            <motion.p 
              className="mt-6 text-lg text-gray-600"
              variants={fadeInUp}
            >
              Rexo membantu bisnis rental dan komunitas rental di Indonesia untuk meningkatkan keamanan dan kepercayaan melalui verifikasi identitas penyewa dan manajemen daftar hitam bersama.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
              variants={fadeInUp}
            >
              <AppStoreLink />
              {/* <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
                className="group hover:bg-teal-50 hover:border-teal-500 transition-all duration-300"
              >
                <span className="h-6 w-6 flex-none text-teal-600 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                  <FontAwesomeIcon icon={faPlay} className="h-3 w-3" />
                </span>
                <span className="ml-2.5 group-hover:text-teal-600">Tonton Video</span>
              </Button> */}
            </motion.div>
          </motion.div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <motion.div 
              className="-mx-4 h-[448px] [mask-image:linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={screenshot} 
                    alt="Rexo App Screenshot" 
                    className="w-full h-full object-cover" 
                    priority
                  />
                </div>
              </PhoneFrame>
            </motion.div>
          </div>
          {/* <motion.div 
            className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"
            variants={fadeInUp}
          >
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Dipercaya oleh bisnis rental di seluruh Indonesia
            </p>
            <div className="mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
              {[1, 2, 3, 4].map((partner) => (
                <motion.div 
                  key={partner}
                  className="h-12 w-32 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-xs text-gray-500"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Partner {partner}
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </div>
  )
}
