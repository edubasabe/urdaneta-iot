import React from 'react'
import { Link } from 'gatsby'
import IndexHeroBackground from '../images/bg-header@2x.jpg'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Features from '../components/features/features'
import Hero from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero background={IndexHeroBackground} />
    <Features />
  </Layout>
)

export default IndexPage
