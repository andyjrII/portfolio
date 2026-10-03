/**
 * Skeleton loader components for better UX during loading states
 */

export const Skeleton = ({ className = '', variant = 'text', ...props }) => {
  const baseClasses = 'skeleton animate-pulse bg-gray-200 dark:bg-gray-700'
  
  const variantClasses = {
    text: 'h-4 rounded',
    title: 'h-8 rounded-lg',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'h-64 rounded-lg',
    image: 'h-48 w-full rounded-lg',
    avatar: 'h-16 w-16 rounded-full',
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.text} ${className}`}
      {...props}
    />
  )
}

export const CardSkeleton = () => (
  <div className="card skeleton-card">
    <Skeleton variant="image" />
    <div className="p-4 space-y-3">
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" style={{ width: '60%' }} />
    </div>
  </div>
)

export const PortfolioSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
)

export const TextSkeleton = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton
        key={index}
        variant="text"
        style={{ width: index === lines - 1 ? '60%' : '100%' }}
      />
    ))}
  </div>
)