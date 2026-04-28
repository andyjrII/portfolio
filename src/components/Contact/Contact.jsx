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

  const inputClass = `w-full px-3 py-2.5 text-sm rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
    theme === 'dark'
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
      : 'bg-white border-gray-300 text-gray-900 focus:bg-white'
  }`

  const labelClass = `block mb-1.5 text-sm font-semibold ${
    theme === 'dark' ? 'text-white' : 'text-heading'
  }`

  return (
    <section
      id="contact"
      className={`contact section py-16 md:py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <div className="text-center mb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide ${
              theme === 'dark'
                ? 'bg-accent/20 text-accent-400 border border-accent-400/30'
                : 'bg-accent/10 text-accent border border-accent/20'
            }`}
          >
            Get In Touch
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Let's Work Together
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full bg-accent dark:bg-accent-400" />
        </div>
        <p
          className={`max-w-2xl mx-auto text-center text-base ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          Got a project in mind, or just want to talk shop? I read every message.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-10" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-accent-400/40'
                    : 'bg-white border-gray-200/70 hover:border-accent/40 shadow-sm'
                }`}
                data-aos="fade-right"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-md flex-shrink-0 ${
                      theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                    }`}
                  >
                    <i className={`bi ${info.icon} text-lg text-accent dark:text-accent-400`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`text-sm font-bold mb-0.5 ${
                        theme === 'dark' ? 'text-white' : 'text-heading'
                      }`}
                    >
                      {info.label}
                    </h3>
                    <p
                      className={`text-sm break-words ${
                        theme === 'dark' ? 'text-white/85' : 'text-gray-600'
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
              className={`php-email-form p-5 md:p-6 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-200/70 shadow-sm'
              }`}
              onSubmit={handleSubmit}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name-field" className={labelClass}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className={inputClass}
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-field" className={labelClass}>Your Email</label>
                  <input
                    type="email"
                    className={inputClass}
                    name="email"
                    id="email-field"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject-field" className={labelClass}>Subject</label>
                <input
                  type="text"
                  className={inputClass}
                  name="subject"
                  id="subject-field"
                  placeholder="Project Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message-field" className={labelClass}>Message</label>
                <textarea
                  className={`${inputClass} resize-none`}
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
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark'
                      ? 'bg-accent-500 text-white hover:bg-accent-400 shadow-md shadow-accent/30'
                      : 'bg-accent text-white hover:bg-accent-700 shadow-md shadow-accent/20'
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
