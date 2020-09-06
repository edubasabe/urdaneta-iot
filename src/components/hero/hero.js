import React from 'react'
import { css } from '@emotion/core'
import './hero.sass'

const hero = ({ background }) => {
  return (
    <div
      css={css`
        background-image: url(${background});
        background-size: cover;
        background-position: right center;
      `}
      className="Hero__container flex items-center px-4"
    >
      <h2 className="Hero__title text-lg-5xl font-light max-w-3xl mb-0 mt-12 mt-lg-2">
        <q className="Hero__quote block mb-6">
          The Internet of Things has the potential to change the world, just as
          the internet did. Maybe even more so.
        </q>
        <span>
          <cite className="mt-1">Kevin Ashton</cite>
        </span>
      </h2>
    </div>
  )
}

export default hero
