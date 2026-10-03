/**
 * Validates required environment variables
 */
export const validateEnv = () => {
  const requiredVars = {
    VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
  }

  const optionalVars = {
    VITE_GA_ID: import.meta.env.VITE_GA_ID,
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  }

  const missing = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    console.warn(`Missing required environment variables: ${missing.join(', ')}`)
  }

  return {
    required: requiredVars,
    optional: optionalVars,
    isValid: missing.length === 0,
  }
}

export const getSiteUrl = () => {
  return import.meta.env.VITE_SITE_URL || ''
}