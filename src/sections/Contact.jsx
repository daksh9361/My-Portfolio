import { useState } from 'react'
import Reveal from '../components/Reveal'

const initialForm = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <Reveal className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s start a conversation.</h2>
          <p>I&apos;m open to discussing placement opportunities, web development, and collaborative projects.</p>
          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd><a href="daksh9361@gmail.com">daksh9361@gmail.com</a></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href="9354570214">+91 93545 70214</a></dd>
            </div>
            <div>
              <dt>Profiles</dt>
              <dd><a href="https://www.linkedin.com/in/ajay-kumar-a01755315">LinkedIn</a> <span aria-hidden="true"></span> <a href="https://www.linkedin.com/in/ajay-kumar-a01755315"></a></dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <p className="form-error" id="name-error">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <p className="form-error" id="email-error">{errors.email}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <p className="form-error" id="message-error">{errors.message}</p>}
          </div>
          <button className="button button--primary" type="submit">Send Message</button>
          {isSubmitted && <p className="form-success" role="status">Thanks for reaching out. Your message has been noted.</p>}
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
