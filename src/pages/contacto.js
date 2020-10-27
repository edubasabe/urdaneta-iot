import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Box, Divider, Heading, Text } from '@chakra-ui/core'

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />
    <Box className="container mx-auto my-8">
      {/* <Link to="/">Go back to the homepage</Link> */}
      <Heading as="h1">Contacto</Heading>
      <Divider />
      <Text>Teléfono: +56941039200 Correo: contacto@Urdaneta-iot.com</Text>
    </Box>
  </Layout>
)

export default Contacto
