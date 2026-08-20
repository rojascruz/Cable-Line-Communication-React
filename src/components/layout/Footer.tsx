import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'
import { siteConfig } from '../../config/siteConfig'

import logo from '../../assets/images/logo/CLC-Logo.png'

import '../../styles/layout/footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* =================================================
            BRAND
            ================================================= */}
        <div className="footer-brand">

          <NavLink
            to={siteConfig.navigation.home}
            className="footer-brand-link"
            aria-label={siteConfig.businessName}
          >
            <img
              src={logo}
              alt=""
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <strong>
                Cable Line
              </strong>

              <span>
                Communication
              </span>
            </div>
          </NavLink>

          <p className="footer-description">
            {t.footer.description}
          </p>

        </div>

        {/* =================================================
            QUICK LINKS
            ================================================= */}
        <div className="footer-column">

          <h2>
            {t.footer.quickLinks}
          </h2>

          <nav
            className="footer-links"
            aria-label={t.footer.quickLinks}
          >
            <NavLink
              to={siteConfig.navigation.home}
            >
              {t.navigation.home}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.about}
            >
              {t.navigation.about}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.navigation.services}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.contact}
            >
              {t.navigation.contact}
            </NavLink>
          </nav>

        </div>

        {/* =================================================
            SERVICES
            ================================================= */}
        <div className="footer-column">

          <h2>
            {t.footer.services}
          </h2>

          <div className="footer-links">

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.footer.serviceItems.underground}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.footer.serviceItems.aerial}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.footer.serviceItems.drilling}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.footer.serviceItems.fiber}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
            >
              {t.footer.serviceItems.splicing}
            </NavLink>

          </div>

        </div>

        {/* =================================================
            CONTACT
            ================================================= */}
        <div className="footer-column">

          <h2>
            {t.footer.contact}
          </h2>

          <div className="footer-contact-list">

            <a
              href={`tel:${siteConfig.phone.href}`}
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <i
                  className="bi bi-telephone"
                  aria-hidden="true"
                />
              </span>

              <span>
                {siteConfig.phone.display}
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <i
                  className="bi bi-envelope"
                  aria-hidden="true"
                />
              </span>

              <span>
                {siteConfig.email}
              </span>
            </a>

          </div>

        </div>

      </div>

      {/* ===================================================
          BOTTOM
          =================================================== */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <span>
            © {new Date().getFullYear()}{' '}
            {siteConfig.businessName}.
          </span>

          <span>
            {t.footer.rights}
          </span>

        </div>

      </div>

    </footer>
  )
}

export default Footer