import { useState } from 'react'
import { personalInfo } from '../../utils/portfolioData'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi James,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="contact section py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">Contact</h2>
        <p className="text-default">
          Have questions or need assistance with a project? I'm here to help! Whether you're
          looking to build a website, require technical support, or are interested in mentorship
          or training, feel free to reach out. Let's discuss how I can help you achieve your
          goals. I look forward to hearing from you!
        </p>
      </div>

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="info-wrap space-y-6">
              <div className="info-item flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0 text-2xl text-accent"></i>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-1">Address</h3>
                  <p className="text-default">{personalInfo.address}</p>
                </div>
              </div>

              <div className="info-item flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0 text-2xl text-accent"></i>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-1">Call</h3>
                  <p className="text-default">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="info-item flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0 text-2xl text-accent"></i>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-1">Whatsapp</h3>
                  <p className="text-default">{personalInfo.whatsapp}</p>
                </div>
              </div>

              <div className="info-item flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0 text-2xl text-accent"></i>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-1">Email</h3>
                  <p className="text-default">{personalInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              id="contact-form"
              className="php-email-form"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name-field" className="block pb-2 text-default font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email-field" className="block pb-2 text-default font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    name="email"
                    id="email-field"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject-field" className="block pb-2 text-default font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  name="subject"
                  id="subject-field"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message-field" className="block pb-2 text-default font-medium">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  name="message"
                  rows="3"
                  id="message-field"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-contrast rounded-md hover:bg-accent/90 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

