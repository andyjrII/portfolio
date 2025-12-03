import { personalInfo } from '../../utils/portfolioData'

function About() {
  return (
    <section id="about" className="about section py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">About</h2>
        <p className="text-default mb-4">
          I'm a passionate and detail-oriented full-stack web developer with over 5 years of
          experience building responsive, user-friendly, and scalable web applications. I enjoy
          crafting seamless user experiences on the frontend while developing robust and efficient
          backends that power high-performance solutions. Over the years, I have refined my
          expertise in full-stack development, database management, API integration, and performance
          optimization, consistently delivering solutions that align with both user needs and
          business goals.
        </p>
        <br />
        <p className="text-default">
          I also bring extensive experience with WordPress, creating websites that are not only
          functional but also easy to manage and maintain. I thrive in fast-paced, collaborative
          environments, where I work closely with teams to meet deadlines and deliver innovative
          web experiences. My ultimate goal is to build solutions that engage users, solve
          real-world problems, and drive measurable business outcomes.
        </p>
      </div>

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full lg:w-1/3">
            <img
              src={personalInfo.profileImage}
              className="w-full h-auto rounded-lg"
              alt={personalInfo.name}
            />
          </div>
          <div className="w-full lg:w-2/3 content">
            <h2 className="text-3xl font-bold text-heading mb-4">
              {personalInfo.title}
            </h2>
            <p className="italic py-3 text-default">
              As a Full-Stack Developer and Website Manager, I specialize in ensuring that every
              web project is a success—from initial concept to deployment and beyond. Whether it's
              maintaining site performance, managing content, or enhancing SEO, my goal is to
              deliver seamless experiences for users and stakeholders alike.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="w-full md:w-1/2">
                <ul className="list-none p-0">
                  <li className="mb-2 flex items-center">
                    <i className="bi bi-chevron-right text-accent mr-2"></i>
                    <strong className="text-heading">Phone:</strong>{' '}
                    <span className="ml-2 text-default">{personalInfo.phone}</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <i className="bi bi-chevron-right text-accent mr-2"></i>
                    <strong className="text-heading">City:</strong>{' '}
                    <span className="ml-2 text-default">{personalInfo.city}</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <i className="bi bi-chevron-right text-accent mr-2"></i>
                    <strong className="text-heading">Email:</strong>{' '}
                    <span className="ml-2 text-default">{personalInfo.email}</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <i className="bi bi-chevron-right text-accent mr-2"></i>
                    <strong className="text-heading">Freelance:</strong>{' '}
                    <span className="ml-2 text-default">{personalInfo.freelance}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3 text-default">
              I'm passionate about bringing ideas to life through code, solving problems
              creatively, and helping businesses make the most of their online presence. Let's
              collaborate to create something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

