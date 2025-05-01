import Image from 'next/image'
import logo from '@/images/logo.png'
import logoSingle from '@/images/logo_single.png'

export function Logomark(props) {
  return (
    <Image 
      src={logoSingle} 
      alt="Rexo Logo" 
      width={40} 
      height={40} 
      {...props} 
    />
  )
}

export function Logo(props) {
  return (
    <Image 
      src={logo} 
      alt="Rexo" 
      width={106} 
      height={40} 
      className={`w-auto ${props.className || ''}`}
      {...props} 
    />
  )
}
