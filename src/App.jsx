import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import PortfolioDetail from './pages/PortfolioDetail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

