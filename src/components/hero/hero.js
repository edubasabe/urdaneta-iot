import React from 'react'
import { css } from '@emotion/core'
import { Heading, Text } from '@chakra-ui/core'
import './hero.css'

const hero = ({ background }) => {
  return (
    <section
      css={css`
        background-image: url(${background});
        background-size: cover;
        background-position: right center;
        height: 320px;

        @media (min-width: 1024px) {
          height: 470px;
        }
      `}
      className="Hero__container flex items-center px-4"
    >
      <Heading className="Hero__quote max-w-screen-lg mx-auto" fontWeight="200">
        <q className="block mb-6">
          The Internet of Things has the potential to change the world, just as
          the internet did. Maybe even more so.
        </q>
        <Text as="cite">Kevin Ashton</Text>
      </Heading>
    </section>
  )
}

export default hero
