import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex items-center justify-center rounded-lg py-2.5 px-4 text-sm font-semibold transition-all duration-200 shadow-sm',
  outline:
    'inline-flex items-center justify-center rounded-lg border py-2.5 px-4 text-sm font-semibold transition-all duration-200',
}

const variantStyles = {
  solid: {
    teal: 'relative overflow-hidden bg-teal-600 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-teal-700 active:text-white/90 before:transition-colors hover:shadow-md hover:-translate-y-0.5',
    white:
      'bg-white text-teal-600 hover:bg-white/90 active:bg-white/90 active:text-teal-700 hover:shadow-md hover:-translate-y-0.5',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hover:shadow-md hover:-translate-y-0.5',
  },
  outline: {
    teal: 'border-teal-300 text-teal-600 hover:border-teal-400 active:bg-teal-50 active:text-teal-700 hover:shadow-sm hover:-translate-y-0.5',
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hover:shadow-sm hover:-translate-y-0.5',
  },
}

export function Button({ className, variant = 'solid', color = 'teal', ...props }) {
  className = clsx(
    baseStyles[variant],
    variant === 'outline'
      ? variantStyles.outline[color]
      : variant === 'solid'
        ? variantStyles.solid[color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
