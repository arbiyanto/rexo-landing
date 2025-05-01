'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faList, faWallet } from '@fortawesome/free-solid-svg-icons'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

// Import screenshots
import screenshotVerify from '@/images/screenshots/verify.png'
import screenshotBlacklist from '@/images/screenshots/blacklist.png'
import screenshotTopup from '@/images/screenshots/topup_balance.png'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Verifikasi Identitas Penyewa',
    description:
      'Verifikasi identitas penyewa potensial melalui e-KTP dan selfie untuk meningkatkan keamanan transaksi rental Anda.',
    icon: DeviceUserIcon,
    screen: VerifyScreen,
    image: screenshotVerify,
    iconComponent: <FontAwesomeIcon icon={faShieldAlt} className="h-6 w-6 text-teal-500" />,
  },
  {
    name: 'Manajemen Daftar Hitam',
    description:
      'Kelola dan cari database daftar hitam bersama. Tambahkan entri ke komunitas spesifik dan cari di semua komunitas yang Anda ikuti untuk menghindari penyewa bermasalah.',
    icon: DeviceNotificationIcon,
    screen: BlacklistScreen,
    image: screenshotBlacklist,
    iconComponent: <FontAwesomeIcon icon={faList} className="h-6 w-6 text-teal-500" />,
  },
  {
    name: 'Sistem Deposit (Points)',
    description:
      'Isi saldo poin Anda dengan mudah menggunakan QRIS melalui Xendit. Gunakan poin untuk melakukan verifikasi identitas dan fitur premium lainnya.',
    icon: DeviceTouchIcon,
    screen: TopupScreen,
    image: screenshotTopup,
    iconComponent: <FontAwesomeIcon icon={faWallet} className="h-6 w-6 text-teal-500" />,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function VerifyScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Verifikasi Identitas</AppScreen.Title>
        <AppScreen.Subtitle>
          Verifikasi <span className="text-white">e-KTP</span> dan selfie penyewa
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
          <Image 
            src={screenshotVerify} 
            alt="Verifikasi Identitas" 
            className="w-full h-full object-contain" 
            priority
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function BlacklistScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Daftar Hitam</AppScreen.Title>
        <AppScreen.Subtitle>Kelola penyewa bermasalah</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
          <Image 
            src={screenshotBlacklist} 
            alt="Manajemen Daftar Hitam" 
            className="w-full h-full object-contain" 
            priority
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function TopupScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Top Up Saldo</AppScreen.Title>
        <AppScreen.Subtitle>
          Isi saldo <span className="text-white">poin</span> dengan QRIS
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
          <Image 
            src={screenshotTopup} 
            alt="Top Up Saldo" 
            className="w-full h-full object-contain" 
            priority
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  return (
    <TabGroup vertical>
      {({ selectedIndex }) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="relative">
            <TabList className="space-y-6">
              {features.map((feature, featureIndex) => (
                <Tab
                  key={feature.name}
                  className={({ selected }) =>
                    clsx(
                      'w-full text-left outline-none'
                    )
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div
                      className={clsx(
                        'relative cursor-pointer rounded-2xl px-8 py-8 transition-colors',
                        selectedIndex === featureIndex
                          ? 'bg-white shadow-md shadow-gray-200'
                          : 'hover:bg-gray-100/70'
                      )}
                    >
                      <div className="relative z-10 flex items-start">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-gray-900/5 ring-1 ring-gray-900/5">
                          {feature.iconComponent}
                        </div>
                        <div className="ml-6 flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-2 text-sm text-gray-700">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {selectedIndex === featureIndex && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600 rounded-l-md"
                          layoutId="activeFeature"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.div>
                </Tab>
              ))}
            </TabList>
          </div>
          
          <TabPanels className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-600/20 to-transparent opacity-70 rounded-full blur-3xl" />
            {features.map((feature, featureIndex) => (
              <TabPanel
                static
                key={feature.name}
                className={clsx(
                  'transition duration-500 ease-in-out absolute inset-0',
                  selectedIndex === featureIndex
                    ? 'opacity-100 z-10 translate-x-0'
                    : 'opacity-0 z-0 translate-x-8'
                )}
              >
                <div className="relative flex items-center justify-center h-full">
                  <motion.div 
                    className="relative h-[600px] w-[300px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <PhoneFrame className="absolute inset-0">
                      <div className="absolute inset-0">
                        <Image
                          src={feature.image}
                          alt={feature.name}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </PhoneFrame>
                  </motion.div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      )}
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <div className="relative">
      <div
        ref={slideContainerRef}
        className="flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 sm:px-6 md:px-8 pb-12"
      >
        {features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-white px-5 py-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 shadow-md shadow-teal-900/5 ring-1 ring-teal-900/5 mb-4">
                  {feature.iconComponent}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-3">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-2 w-2 rounded-full transition-colors',
              activeIndex === featureIndex
                ? 'bg-teal-600'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
                behavior: 'smooth'
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Keunggulan Rexo App"
      className="bg-gradient-to-b from-teal-50 to-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Kelola Bisnis Rental
            </span>{' '}
            dengan Lebih Aman dan Terpercaya
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Rexo menyediakan berbagai fitur yang dirancang khusus untuk membantu bisnis rental dan komunitas rental di Indonesia meningkatkan keamanan dan kepercayaan dalam ekosistem rental.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
