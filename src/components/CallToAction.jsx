'use client'

import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons'

export function CallToAction() {
  return (
    <section
      id="download-app"
      className="relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 opacity-20">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      
      {/* Add animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-teal-400 opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <motion.div 
          className="mx-auto max-w-md sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
              <FontAwesomeIcon icon={faShieldAlt} className="h-8 w-8 text-teal-300" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unduh Rexo sekarang
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Hanya butuh 30 detik untuk mendaftar. Unduh aplikasi dan buat akun hari ini untuk mulai meningkatkan keamanan bisnis rental Anda dengan verifikasi identitas penyewa dan manajemen daftar hitam.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreLink color="white" />
          </div>
          
          {/* <div className="mt-12 pt-8 border-t border-teal-700/40 flex flex-col sm:flex-row gap-8 justify-between">
            <motion.div
              className="flex flex-col items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faMobileAlt} className="h-6 w-6 text-teal-300 mb-2" />
              <p className="text-teal-100 text-sm text-center">Tersedia di Android</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-teal-300 mb-2" />
              <p className="text-teal-100 text-sm text-center">Keamanan Terjamin</p>
            </motion.div>
          </div> */}
        </motion.div>
      </Container>
    </section>
  )
}
