import { services } from '../../utils/portfolioData'

function Services() {
  return (
    <section id="services" className="services section py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">Services</h2>
        <p className="text-default">
          I offer a range of professional services designed to meet the diverse needs of my
          clients. From technical solutions to creative consultations, I aim to provide
          value-driven results that help individuals and businesses achieve their goals. Explore
          the services below to see how I can assist you!
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item flex items-start gap-4 p-6 bg-surface rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="icon flex-shrink-0 text-4xl text-accent">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div>
                <h4 className="title text-xl font-bold text-heading mb-2">
                  <a className="hover:text-accent transition-colors cursor-pointer">
                    {service.title}
                  </a>
                </h4>
                <p className="description text-default">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

