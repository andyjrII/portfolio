import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'

function PortfolioDetail() {
  const { slug } = useParams()

  return (
    <div className="portfolio-details-page">
      <Header />
      <main className="main">
        <div className="container mx-auto px-4 py-8">
          <h1>Portfolio Detail: {slug}</h1>
          <p>This page will be implemented with the portfolio detail content.</p>
        </div>
      </main>
    </div>
  )
}

export default PortfolioDetail

