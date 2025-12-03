function Resume() {
  return (
    <section id="resume" className="resume section py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">Resume</h2>
        <p className="text-default">
          Passionate and results-driven Full-Stack Web Developer with 5+ years of experience
          designing and delivering scalable backend systems and responsive frontends. Skilled in
          building end-to-end solutions using Node.js, NestJS, PostgreSQL, MongoDB, Next.js, and
          React. Adept at API integration, performance optimization, and deploying real-world
          applications. Experienced in collaborating with agile teams to deliver high-quality,
          maintainable, and user-focused products.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="pdf-container w-full h-[800px]">
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

