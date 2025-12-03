import { useTheme } from '../../contexts/ThemeContext'

function Resume() {
  const { theme } = useTheme()

  return (
    <section
      id="resume"
      className={`resume section py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <div className="text-center mb-12">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              theme === 'dark'
                ? 'bg-accent/20 text-accent border border-accent/30'
                : 'bg-accent/10 text-accent border border-accent/20'
            }`}
          >
            My Resume
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Professional Experience
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-accent' : 'bg-accent'
            }`}
          ></div>
        </div>
        <p
          className={`max-w-3xl mx-auto text-center text-lg ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          Passionate and results-driven Full-Stack Web Developer with 5+ years of experience
          designing and delivering scalable backend systems and responsive frontends. Skilled in
          building end-to-end solutions using Node.js, NestJS, PostgreSQL, MongoDB, Next.js, and
          React.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-16" data-aos="fade-up" data-aos-delay="100">
        <div
          className={`pdf-container w-full h-[800px] rounded-2xl overflow-hidden backdrop-blur-md border shadow-2xl ${
            theme === 'dark'
              ? 'bg-white/10 border-white/20'
              : 'bg-white/80 border-gray-200/50'
          }`}
        >
          <embed
            src="/assets/files/Andy.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="border-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Resume

