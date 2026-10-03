import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { validateEnv } from './utils/envValidation'
import { ErrorBoundary } from './components/ErrorBoundary'
import Home from './pages/Home'
import PortfolioDetail from './pages/PortfolioDetail'
import NotFound from './pages/NotFound'

// Validate environment variables on app startup
validateEnv()

const siteUrl = import.meta.env.VITE_SITE_URL || ''

function App() {
  useEffect(() => {
    const path = '/assets/img/my-profile-img.jpg'
    const ogImage = siteUrl ? `${siteUrl.replace(/\/$/, '')}${path}` : path
    const meta = document.querySelector('meta[property="og:image"]')
    if (meta) meta.setAttribute('content', ogImage)
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

