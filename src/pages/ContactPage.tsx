import {
  useState,
  type FormEvent,
} from 'react'

import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../config/siteConfig'

import '../styles/pages/contact.css'

type InquiryType =
  | 'project'
  | 'employment'

type ContactFormData = {
  inquiryType: InquiryType
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialFormData: ContactFormData = {
  inquiryType: 'project',
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
    useState<ContactFormData>(
      initialFormData,
    )

  const isEmployment =
    formData.inquiryType === 'employment'

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
      title:
        page.benefits.items.response.title,
      description:
        page.benefits.items.response
          .description,
      icon: 'bi-lightning-charge',
    },
    {
      title:
        page.benefits.items.personalized
          .title,
      description:
        page.benefits.items.personalized
          .description,
      icon: 'bi-person-check',
    },
    {
      title:
        page.benefits.items.tailored.title,
      description:
        page.benefits.items.tailored
          .description,
      icon: 'bi-sliders',
    },
    {
      title:
        page.benefits.items.trust.title,
      description:
        page.benefits.items.trust
          .description,
      icon: 'bi-shield-check',
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

  const handleInquiryTypeChange = (
    inquiryType: InquiryType,
  ) => {
    setFormData((current) => ({
      ...current,
      inquiryType,
      service: '',
      message: '',
    }))
  }

  const scrollToForm = (
    inquiryType: InquiryType,
  ) => {
    handleInquiryTypeChange(inquiryType)

    window.setTimeout(() => {
      document
        .getElementById('contact-form-card')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 50)
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const subject = isEmployment
      ? `${siteConfig.businessName} - Employment Inquiry - ${formData.name}`
      : `${siteConfig.businessName} - ${
          formData.service ||
          'Service Request'
        }`

    const body = isEmployment
      ? [
          'EMPLOYMENT INQUIRY',
          '',
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          `Phone: ${
            formData.phone ||
            'Not provided'
          }`,
          '',
          'Experience / Employment Interest:',
          formData.message,
        ].join('\n')
      : [
          'PROJECT / SERVICE INQUIRY',
          '',
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          `Phone: ${
            formData.phone ||
            'Not provided'
          }`,
          `Service: ${
            formData.service ||
            'Not specified'
          }`,
          '',
          'Project Details:',
          formData.message,
        ].join('\n')

    const mailto =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(
        subject,
      )}` +
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

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="contact-hero">

        <div
          className="contact-hero-decoration contact-hero-decoration-one"
          aria-hidden="true"
        />

        <div
          className="contact-hero-decoration contact-hero-decoration-two"
          aria-hidden="true"
        />

        <div
          className="contact-hero-grid"
          aria-hidden="true"
        />

        <div className="contact-hero-container">

          {/* =================================================
              HERO COPY
              ================================================= */}
          <div className="contact-hero-copy">

            <span className="contact-hero-eyebrow">
              <i
                className="bi bi-chat-dots"
                aria-hidden="true"
              />

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

            <div className="contact-hero-options">

              <button
                type="button"
                onClick={() =>
                  scrollToForm('project')
                }
              >
                <span className="contact-hero-option-icon">
                  <i
                    className="bi bi-buildings"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong>
                    {page.hero.projectContact}
                  </strong>

                  <small>
                    {page.hero.projectContactDescription}
                  </small>
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToForm('employment')
                }
              >
                <span className="contact-hero-option-icon">
                  <i
                    className="bi bi-person-workspace"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong>
                    {page.hero.employmentContact}
                  </strong>

                  <small>
                    {page.hero.employmentContactDescription}
                  </small>
                </span>
              </button>

            </div>

          </div>

          {/* =================================================
              DIRECT CONTACT
              ================================================= */}
          <div className="contact-hero-direct">

            <span className="contact-hero-direct-label">
              {page.hero.directContact}
            </span>

            <a
              href={`tel:${siteConfig.phone.href}`}
              className="contact-hero-direct-link"
            >
              <span className="contact-direct-icon">
                <i
                  className="bi bi-telephone"
                  aria-hidden="true"
                />
              </span>

              <div>
                <small>
                  {page.hero.callUs}
                </small>

                <strong>
                  {siteConfig.phone.display}
                </strong>
              </div>

              <i
                className="bi bi-arrow-up-right contact-direct-arrow"
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="contact-hero-direct-link"
            >
              <span className="contact-direct-icon">
                <i
                  className="bi bi-envelope"
                  aria-hidden="true"
                />
              </span>

              <div>
                <small>
                  {page.hero.emailUs}
                </small>

                <strong>
                  {siteConfig.email}
                </strong>
              </div>

              <i
                className="bi bi-arrow-up-right contact-direct-arrow"
                aria-hidden="true"
              />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTACT
          ===================================================== */}
      <section className="contact-main-section">

        <div className="contact-main-container">

          {/* =================================================
              LEFT INFORMATION
              ================================================= */}
          <aside className="contact-info-panel">

            <span className="section-eyebrow">
              <i
                className="bi bi-chat-square-text"
                aria-hidden="true"
              />

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

            {/* ===============================================
                DIRECT ACTIONS
                =============================================== */}
            <div className="contact-direct-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-action contact-direct-action-whatsapp"
              >
                <div className="contact-action-icon">
                  <i
                    className="bi bi-whatsapp"
                    aria-hidden="true"
                  />
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

                <i
                  className="bi bi-arrow-right contact-action-arrow"
                  aria-hidden="true"
                />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-direct-action"
              >
                <div className="contact-action-icon">
                  <i
                    className="bi bi-envelope"
                    aria-hidden="true"
                  />
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

                <i
                  className="bi bi-arrow-right contact-action-arrow"
                  aria-hidden="true"
                />
              </a>

            </div>

            {/* ===============================================
                CAREERS
                =============================================== */}
            <div className="contact-careers-card">

              <div className="contact-careers-icon">
                <i
                  className="bi bi-person-workspace"
                  aria-hidden="true"
                />
              </div>

              <div className="contact-careers-content">

                <span className="contact-careers-eyebrow">
                  {page.careers.eyebrow}
                </span>

                <h3>
                  {page.careers.title}
                </h3>

                <p>
                  {page.careers.description}
                </p>

                <button
                  type="button"
                  className="contact-careers-button"
                  onClick={() =>
                    scrollToForm('employment')
                  }
                >
                  <span>
                    {page.careers.button}
                  </span>

                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  />
                </button>

              </div>

            </div>

            {/* ===============================================
                PROCESS
                =============================================== */}
            <div className="contact-process">

              <span className="contact-process-label">
                {page.process.eyebrow}
              </span>

              <div className="contact-process-item">

                <span className="contact-process-icon">
                  <i
                    className="bi bi-chat-square-text"
                    aria-hidden="true"
                  />
                </span>

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

                <span className="contact-process-icon">
                  <i
                    className="bi bi-search"
                    aria-hidden="true"
                  />
                </span>

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

                <span className="contact-process-icon">
                  <i
                    className="bi bi-telephone-outbound"
                    aria-hidden="true"
                  />
                </span>

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

          {/* =================================================
              FORM
              ================================================= */}
          <div
            id="contact-form-card"
            className={`contact-form-card ${
              isEmployment
                ? 'is-employment'
                : ''
            }`}
          >

            <div className="contact-form-header">

              <span>
                <i
                  className={
                    isEmployment
                      ? 'bi bi-person-badge'
                      : 'bi bi-clipboard2-check'
                  }
                  aria-hidden="true"
                />

                {isEmployment
                  ? page.form.employmentEyebrow
                  : page.form.eyebrow}
              </span>

              <h2>
                {isEmployment
                  ? page.form.employmentTitle
                  : page.form.title}
              </h2>

              <p>
                {isEmployment
                  ? page.form
                      .employmentDescription
                  : page.form.description}
              </p>

            </div>

            {/* ===============================================
                TYPE SELECTOR
                =============================================== */}
            <div className="contact-inquiry-selector">

              <button
                type="button"
                className={
                  !isEmployment
                    ? 'is-active'
                    : ''
                }
                onClick={() =>
                  handleInquiryTypeChange(
                    'project',
                  )
                }
              >
                <i
                  className="bi bi-buildings"
                  aria-hidden="true"
                />

                <span>
                  {page.form.inquiry.project}
                </span>
              </button>

              <button
                type="button"
                className={
                  isEmployment
                    ? 'is-active'
                    : ''
                }
                onClick={() =>
                  handleInquiryTypeChange(
                    'employment',
                  )
                }
              >
                <i
                  className="bi bi-person-workspace"
                  aria-hidden="true"
                />

                <span>
                  {page.form.inquiry.employment}
                </span>
              </button>

            </div>

            {/* ===============================================
                FORM
                =============================================== */}
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

                <div
                  className={`contact-field ${
                    isEmployment
                      ? 'contact-field-full'
                      : ''
                  }`}
                >
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

                {!isEmployment && (
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

                      <i
                        className="bi bi-chevron-down"
                        aria-hidden="true"
                      />

                    </div>

                  </div>
                )}

                <div className="contact-field contact-field-full">

                  <label htmlFor="contact-message">
                    {isEmployment
                      ? page.form.fields
                          .employmentMessage
                      : page.form.fields.message}

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
                      isEmployment
                        ? page.form.placeholders
                            .employmentMessage
                        : page.form.placeholders
                            .message
                    }
                    required
                  />

                </div>

              </div>

              <div className="contact-form-footer">

                <p>
                  <i
                    className="bi bi-shield-check"
                    aria-hidden="true"
                  />

                  {page.form.privacy}
                </p>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>
                    {isEmployment
                      ? page.form
                          .employmentSubmit
                      : page.form.submit}
                  </span>

                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  />
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
          ===================================================== */}
      <section className="contact-benefits-section">

        <div className="contact-benefits-container">

          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="contact-benefit-card"
            >
              <div className="contact-benefit-icon">
                <i
                  className={`bi ${benefit.icon}`}
                  aria-hidden="true"
                />
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

      {/* =====================================================
          BOTTOM
          ===================================================== */}
      <section className="contact-bottom-section">

        <div className="contact-bottom-container">

          <div className="contact-bottom-icon">
            <i
              className="bi bi-question-lg"
              aria-hidden="true"
            />
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