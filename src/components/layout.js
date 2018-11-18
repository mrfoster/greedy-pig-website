import React from 'react'
import CookieConsent from './cookie-consent'
import './layout.scss'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import './animate.css'

const Layout = ({ children }) => (
  <>
    <Helmet
      meta={[
        { property: 'og:type', content: 'website' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div className="page">
      <Fade>{children}</Fade>
    </div>

    <CookieConsent />
  </>
)

export default Layout
