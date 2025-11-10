'use client'

import { useState, FormEvent } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Fallback: mailto pentru cazul în care nu este configurat endpoint
    const mailtoLink = `mailto:contact@yap-detailing.ro?subject=Programare de la ${formData.name}&body=Nume: ${formData.name}%0AEmail: ${formData.email}%0ATelefon: ${formData.phone}%0AServiciu: ${formData.service}%0AMesaj: ${formData.message}`
    
    // Aici poți adăuga logica pentru trimiterea către endpoint (Netlify, Formspree, etc.)
    // Exemplu pentru Netlify Forms:
    // try {
    //   const response = await fetch('/', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //   if (response.ok) {
    //     setSubmitStatus('success')
    //   }
    // } catch (error) {
    //   setSubmitStatus('error')
    // }

    // Pentru moment, folosim mailto ca fallback
    setTimeout(() => {
      window.location.href = mailtoLink
      setSubmitStatus('success')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only">
        <label>
          Nu completați acest câmp: <input name="bot-field" />
        </label>
      </p>

      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Nume complet <span className="contact-form__required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="Introdu numele tău"
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          Email <span className="contact-form__required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="email@exemplu.ro"
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="phone" className="contact-form__label">
          Telefon <span className="contact-form__required">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="0765432706"
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="service" className="contact-form__label">
          Serviciu dorit
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="contact-form__select"
        >
          <option value="">Selectează un serviciu</option>
          <option value="ceramic-coating">Ceramic Coating</option>
          <option value="ppf">PPF (Paint Protection Film)</option>
          <option value="detailing-interior">Detailing Interior</option>
          <option value="polish">Polish & Corecție Vopsea</option>
          <option value="detailing-complet">Detailing Complet</option>
          <option value="alta">Altă întrebare</option>
        </select>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Mesaj <span className="contact-form__required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          placeholder="Spune-ne despre nevoile tale..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="contact-form__message contact-form__message--success" role="alert">
          Mesajul tău a fost trimis cu succes! Te vom contacta în curând.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="contact-form__message contact-form__message--error" role="alert">
          A apărut o eroare. Te rugăm să încerci din nou sau să ne suni direct.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-form__submit"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite Mesaj'}
      </button>

      <p className="contact-form__note">
        Sau sună-ne direct la <a href="tel:0765432706">0765432706</a>
      </p>
    </form>
  )
}

