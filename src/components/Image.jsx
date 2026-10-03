import { useState } from 'react'

/**
 * Optimized Image component with lazy loading, error handling, and placeholder support
 */
export const Image = ({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  placeholder = '/assets/img/placeholder.jpg',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setImgSrc('/assets/img/error-placeholder.jpg')
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      {...props}
    />
  )
}