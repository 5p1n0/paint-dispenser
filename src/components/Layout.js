import * as React from 'react'
import Header from './Header'
import Seo from './Seo'

const Layout = ({ children }) => {
  return (
    <div>
      <Seo />
      <Header />
      <main className='grid gap-5 grid-cols-1 sm:grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto_30rem] sm:grid-rows-[auto_auto_0.2fr] mx-4'>
        {children}
      </main>
    </div>
  )

}

export default Layout