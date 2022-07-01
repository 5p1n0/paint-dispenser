import * as React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => {

  return(
    <Layout>
      <section className="max-w-[640px] mt-8 mx-4 sm:mx-auto mb-12">
        <h1 className="text-2xl font-bold mb-4">Not Found</h1>
        <p>You just hit a route that doesn't exist</p>
      </section>
    </Layout>
  )
}

export default NotFoundPage