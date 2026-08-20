import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/layout/whatsapp-button.css'

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
      <i
        className="bi bi-whatsapp"
        aria-hidden="true"
      />
    </a>
  )
}

export default WhatsAppButton