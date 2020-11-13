import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Box, Divider, Heading, Text } from '@chakra-ui/core'

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quiénes somos" />
    <Box className="container mx-auto my-8">
      <Box>
        <Heading as="h1">Quiénes somos</Heading>
        <Divider />
        <Text>
          Urdaneta Consulting IOT dedicate está conformado por un grupo de
          Profesionales que tienen un objetivo común: encontrar la manera de
          hacer el trabajo mejor. Para esto buscamos toda la ayuda posible de la
          tecnología porque creemos firmemente que es el método más eficiente
          para mejorar nuestra calidad de vida.
        </Text>
        <br />
        <Text>
          Nos dedicamos a implementar soluciones tecnológicas residenciales,
          empresariales e industriales para automatizar procesos que le permita
          a nuestros clientes aumentar sus beneficios, productividad,
          competitividad y comodidad. Llevando como bandera que el Internet de
          las Cosas (IOT) es la llave maestra para entender hacia donde vamos
          como sociedad digital.
        </Text>
      </Box>
      <Box>
        <Heading>Misión</Heading>
        <Text>
          Ofrecer a nuestros clientes la oportunidad de hacer más eficientes su
          procesos, incrementando sus beneficios e impulsando su desarrollo
          acompañándolos en el dominio de sus capacidades tecnológicas.
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default QuienesSomos
