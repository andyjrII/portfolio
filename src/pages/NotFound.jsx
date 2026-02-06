import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useTheme } from '../contexts/ThemeContext'

function NotFound() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="main flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <h1
              className={`text-4xl font-bold ${
                isDark ? 'text-white' : 'text-heading'
              }`}
            >
              Page not found
            </h1>
            <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound
