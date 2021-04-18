import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Box, Heading, Input, Stack, Text, Textarea, Button, Flex } from '@chakra-ui/core'
import { useForm } from 'react-hook-form'

const Contacto = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(d);
  }

  return (
    <Layout>
      <SEO title="Contacto" />
      <Box className="container mx-auto max-w-screen-xl my-8 lg:px-8">
        {/* <Link to="/">Go back to the homepage</Link> */}
        <Heading as="h1">Contacto</Heading>
        <Text mb="1rem">
          <b>Teléfono:</b> <a href="tel:+56941039200">+56 9 4103 9200</a><br/>
          <b>Correo:</b> <a href="mailto:contacto@Urdaneta-iot.com">contacto@Urdaneta-iot.com</a>
        </Text>
        <Flex justify="space-between">
          <Flex direction={["column"]}>
            <Text as="h4" fontWeight="700" fontSize="20px">Formulario de contacto</Text>
            <Text as="p" mb="1rem">Envíanos un mensaje y te responderemos lo antes posible.</Text>
            <Box maxW="480px">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                  <Input {...register("name")} type="text" placeholder="Escriba su nombre" />
                  <Input {...register("email")} type="text" placeholder="Escriba su email" />
                  <Textarea {...register("message")} placeholder="Escriba un mensaje" />
                  <Button type="submit">Enviar</Button>
                </Stack>
              </form>
            </Box>
          </Flex>
          <Flex>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13316.186466348312!2d-70.648401!3d-33.448092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50afe38ce75%3A0xf8c32d4e2622d30f!2sSerrano%20266%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1618759553608!5m2!1ses!2sus" title="Location" width="400" height="300" allowFullScreen="" loading="lazy"></iframe>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}



export default Contacto
