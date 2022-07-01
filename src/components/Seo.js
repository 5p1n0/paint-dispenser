import * as React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (lang) => {
  return (
    <Helmet
      htmlAttributes={
        lang
      }
      title={'Homepage | Paint Dispenser'}
    >
    </Helmet>
  )

}

export default Seo