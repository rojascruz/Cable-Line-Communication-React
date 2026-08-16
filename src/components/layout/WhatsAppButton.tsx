import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

function WhatsAppButton() {
  const { t } = useLanguage()

  const whatsappUrl =
    `https://wa.me/${siteConfig.whatsapp.number}` +
    `?text=${encodeURIComponent(t.whatsapp.message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-button"
      aria-label="Contact Cable Line Communication on WhatsApp"
    >
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
          d="M8.3 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-.9c.2-.2.4-.3.7-.1l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.5.5-1.4.8-2.4.5-1.1-.3-2.7-1-4.3-2.4-1.3-1.2-2.2-2.7-2.6-3.8-.4-1.1-.1-2.2.4-2.9Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}

export default WhatsAppButton