import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../utils/portfolioData'

function Contact() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi James,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`

      window.location.href = mailtoLink
      setIsSubmitting(false)
    }, 500)
  }

  const contactInfo = [
    { icon: 'bi-geo-alt', label: 'Address', value: personalInfo.address },
    { icon: 'bi-telephone', label: 'Call', value: personalInfo.phone },
    { icon: 'bi-whatsapp', label: 'Whatsapp', value: personalInfo.whatsapp },
    { icon: 'bi-envelope', label: 'Email', value: personalInfo.email },
  ]

  return (
    <section
      id="contact"
      className={`contact section py-20 ${
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
            Get In Touch
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Let's Work Together
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
          Have questions or need assistance with a project? I'm here to help! Whether you're
          looking to build a website, require technical support, or are interested in mentorship
          or training, feel free to reach out.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-16" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-accent/30'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white hover:border-accent/30'
                } shadow-lg`}
                data-aos="fade-right"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                    }`}
                  >
                    <i className={`bi ${info.icon} text-2xl text-accent`}></i>
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-heading'
                      }`}
                    >
                      {info.label}
                    </h3>
                    <p
                      className={`${
                        theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              id="contact-form"
              className={`php-email-form p-8 rounded-2xl backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/80 border-gray-200/50'
              } shadow-xl`}
              onSubmit={handleSubmit}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label
                    htmlFor="name-field"
                    className={`block mb-2 font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
                        : 'bg-white border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email-field"
                    className={`block mb-2 font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
                        : 'bg-white border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                    name="email"
                    id="email-field"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject-field"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
                      : 'bg-white border-gray-300 text-gray-900 focus:bg-white'
                  }`}
                  name="subject"
                  id="subject-field"
                  placeholder="Project Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message-field"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  Message
                </label>
                <textarea
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
                      : 'bg-white border-gray-300 text-gray-900 focus:bg-white'
                  }`}
                  name="message"
                  rows="5"
                  id="message-field"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark'
                      ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/30'
                      : 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <i className="bi bi-hourglass-split animate-spin"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <i className="bi bi-send"></i>
                    </span>
                  )}
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

