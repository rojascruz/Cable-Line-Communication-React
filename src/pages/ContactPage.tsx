import { useState, type FormEvent } from 'react'

import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../config/siteConfig'

import '../styles/pages/contact.css'

type ContactFormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function ContactPage() {
  const { t } = useLanguage()

  const page = t.contactPage

  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData)

  const serviceOptions = [
    page.form.services.underground,
    page.form.services.aerial,
    page.form.services.drilling,
    page.form.services.fiber,
    page.form.services.splicing,
    page.form.services.maintenance,
    page.form.services.other,
  ]

  const benefits = [
    {
      title: page.benefits.items.response.title,
      description:
        page.benefits.items.response.description,

      icon: (
        <path
          d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },

    {
      title:
        page.benefits.items.personalized.title,

      description:
        page.benefits.items.personalized.description,

      icon: (
        <>
          <circle
            cx="12"
            cy="8"
            r="3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M5 20c.5-4 3-6 7-6s6.5 2 7 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      ),
    },

    {
      title:
        page.benefits.items.tailored.title,

      description:
        page.benefits.items.tailored.description,

      icon: (
        <>
          <path
            d="M4 7h10M18 7h2M4 17h2M10 17h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle
            cx="16"
            cy="7"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="8"
            cy="17"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </>
      ),
    },

    {
      title:
        page.benefits.items.trust.title,

      description:
        page.benefits.items.trust.description,

      icon: (
        <>
          <path
            d="M12 3l7 3v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="m9 12 2 2 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
  ]

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const subject =
      `${siteConfig.businessName} - ${
        formData.service || 'Service Request'
      }`

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service: ${
        formData.service || 'Not specified'
      }`,
      '',
      'Project details:',
      formData.message,
    ].join('\n')

    const mailto =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  const whatsappUrl =
    `https://wa.me/${siteConfig.whatsapp.number}` +
    `?text=${encodeURIComponent(
      t.whatsapp.message,
    )}`

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <div
          className="
            contact-hero-decoration
            contact-hero-decoration-one
          "
          aria-hidden="true"
        />

        <div
          className="
            contact-hero-decoration
            contact-hero-decoration-two
          "
          aria-hidden="true"
        />

        <div className="contact-hero-container">

          <div className="contact-hero-copy">

            <span className="contact-hero-eyebrow">
              {page.hero.eyebrow}
            </span>

            <h1 className="contact-hero-title">
              {page.hero.title}

              <span>
                {' '}
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p className="contact-hero-description">
              {page.hero.description}
            </p>

          </div>

          <div className="contact-hero-direct">

            <span className="contact-hero-direct-label">
              {page.hero.directContact}
            </span>

            <a
              href={`tel:${siteConfig.phone.href}`}
              className="contact-hero-direct-link"
            >
              <span className="contact-direct-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h3l2 5-2 2a14 14 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <small>
                  {page.hero.callUs}
                </small>

                <strong>
                  {siteConfig.phone.display}
                </strong>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="contact-hero-direct-link"
            >
              <span className="contact-direct-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6h16v12H4zM4 7l8 6 8-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <small>
                  {page.hero.emailUs}
                </small>

                <strong>
                  {siteConfig.email}
                </strong>
              </div>
            </a>

          </div>

        </div>

      </section>


      {/* MAIN CONTACT SECTION */}
      <section className="contact-main-section">

        <div className="contact-main-container">

          <aside className="contact-info-panel">

            <span className="section-eyebrow">
              {page.info.eyebrow}
            </span>

            <h2 className="contact-info-title">
              {page.info.title}

              <span>
                {' '}
                {page.info.titleHighlight}
              </span>
            </h2>

            <p className="contact-info-description">
              {page.info.description}
            </p>


            {/* DIRECT ACTIONS */}
            <div className="contact-direct-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  contact-direct-action
                  contact-direct-action-whatsapp
                "
              >

                <div className="contact-action-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8.5 8.4c.3-.5.5-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.5 1.9 2.5 2.5.2.1.4.2.6 0l.8-.8c.2-.2.4-.3.7-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.5.5-1.3.8-2.3.5-1.1-.3-2.6-1-4.1-2.3-1.3-1.1-2.1-2.6-2.5-3.7-.4-1-.1-2.1.4-2.7Z"
                      fill="currentColor"
                    />
                  </svg>

                </div>

                <div>
                  <strong>
                    {page.directActions.whatsapp.title}
                  </strong>

                  <span>
                    {
                      page.directActions
                        .whatsapp.description
                    }
                  </span>
                </div>

                <svg
                  className="contact-action-arrow"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </a>


              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-direct-action"
              >

                <div className="contact-action-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6h16v12H4zM4 7l8 6 8-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                <div>
                  <strong>
                    {page.directActions.email.title}
                  </strong>

                  <span>
                    {
                      page.directActions
                        .email.description
                    }
                  </span>
                </div>

                <svg
                  className="contact-action-arrow"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </a>

            </div>


            {/* PROCESS */}
            <div className="contact-process">

              <span className="contact-process-label">
                {page.process.eyebrow}
              </span>

              <div className="contact-process-item">
                <span>01</span>

                <div>
                  <strong>
                    {
                      page.process.items
                        .details.title
                    }
                  </strong>

                  <p>
                    {
                      page.process.items
                        .details.description
                    }
                  </p>
                </div>
              </div>

              <div className="contact-process-item">
                <span>02</span>

                <div>
                  <strong>
                    {
                      page.process.items
                        .review.title
                    }
                  </strong>

                  <p>
                    {
                      page.process.items
                        .review.description
                    }
                  </p>
                </div>
              </div>

              <div className="contact-process-item">
                <span>03</span>

                <div>
                  <strong>
                    {
                      page.process.items
                        .connect.title
                    }
                  </strong>

                  <p>
                    {
                      page.process.items
                        .connect.description
                    }
                  </p>
                </div>
              </div>

            </div>

          </aside>


          {/* FORM */}
          <div className="contact-form-card">

            <div className="contact-form-header">

              <span>
                {page.form.eyebrow}
              </span>

              <h2>
                {page.form.title}
              </h2>

              <p>
                {page.form.description}
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-grid">

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    {page.form.fields.name}
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      handleChange(
                        'name',
                        event.target.value,
                      )
                    }
                    placeholder={
                      page.form.placeholders.name
                    }
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="contact-email">
                    {page.form.fields.email}
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      handleChange(
                        'email',
                        event.target.value,
                      )
                    }
                    placeholder={
                      page.form.placeholders.email
                    }
                    autoComplete="email"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="contact-phone">
                    {page.form.fields.phone}
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      handleChange(
                        'phone',
                        event.target.value,
                      )
                    }
                    placeholder={
                      page.form.placeholders.phone
                    }
                    autoComplete="tel"
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="contact-service">
                    {page.form.fields.service}
                  </label>

                  <div className="contact-select-wrapper">

                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(event) =>
                        handleChange(
                          'service',
                          event.target.value,
                        )
                      }
                    >

                      <option value="">
                        {
                          page.form
                            .placeholders.service
                        }
                      </option>

                      {serviceOptions.map(
                        (service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ),
                      )}

                    </select>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="m7 10 5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>

                </div>


                <div
                  className="
                    contact-field
                    contact-field-full
                  "
                >

                  <label htmlFor="contact-message">
                    {page.form.fields.message}
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="contact-message"
                    rows={7}
                    value={formData.message}
                    onChange={(event) =>
                      handleChange(
                        'message',
                        event.target.value,
                      )
                    }
                    placeholder={
                      page.form
                        .placeholders.message
                    }
                    required
                  />

                </div>

              </div>


              <div className="contact-form-footer">

                <p>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3l7 3v5c0 4.6-2.9 8.1-7 10-4.1-1.9-7-5.4-7-10V6l7-3Zm-3 9 2 2 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {page.form.privacy}
                </p>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>
                    {page.form.submit}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="contact-benefits-section">

        <div className="contact-benefits-container">

          {benefits.map((benefit) => (

            <article
              key={benefit.title}
              className="contact-benefit-card"
            >

              <div className="contact-benefit-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </svg>

              </div>

              <div className="contact-benefit-content">

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* BOTTOM */}
      <section className="contact-bottom-section">

        <div className="contact-bottom-container">

          <div className="contact-bottom-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M12 5v14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

          </div>

          <div>

            <span>
              {page.bottom.eyebrow}
            </span>

            <h2>
              {page.bottom.title}
            </h2>

            <p>
              {page.bottom.description}
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default ContactPage