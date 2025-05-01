import Link from 'next/link'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'

export function AppStoreLink({ color = 'teal' }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Google Play Store Button - Unduh Sekarang */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.kreatorku.rexo"
        aria-label="Unduh di Google Play"
        className={clsx(
          'rounded-lg transition-colors flex items-center justify-center px-4 py-3',
          'shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300',
          color === 'teal'
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : color === 'white'
            ? 'bg-white text-gray-900 hover:bg-gray-50'
            : 'bg-gray-800 text-white hover:bg-gray-900',
        )}
      >
        <div className="flex items-center">
          <div className="mr-3 text-2xl">
            <FontAwesomeIcon icon={faGooglePlay} />
          </div>
          <div>
            <div className="text-xs">Unduh di</div>
            <div className="text-sm font-semibold">Google Play</div>
          </div>
        </div>
      </Link>

      {/* Apple App Store Button - Coming Soon */}
      <Link
        href="#"
        aria-label="Segera Hadir di App Store"
        className={clsx(
          'rounded-lg transition-colors flex items-center justify-center px-4 py-3',
          'shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300',
          'relative overflow-hidden',
          color === 'teal'
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : color === 'white'
            ? 'bg-white text-gray-900 hover:bg-gray-50'
            : 'bg-gray-800 text-white hover:bg-gray-900',
        )}
      >
        <div className="absolute top-0 right-0 bg-teal-500 text-xs px-2 py-1 text-white rounded-bl-md font-medium">
          Coming Soon
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-2xl">
            <FontAwesomeIcon icon={faApple} />
          </div>
          <div>
            <div className="text-xs">Segera Hadir di</div>
            <div className="text-sm font-semibold">App Store</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
