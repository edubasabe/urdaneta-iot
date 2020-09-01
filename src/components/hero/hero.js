import React from 'react'
import { css } from '@emotion/core'

const hero = ({ background }) => {
  return (
    <div
      css={css`
        background-image: url(${background});
        background-size: cover;
        background-position: right center;
        height: 470px;
      `}
      className="flex items-center"
    >
      <h2 className="text-5xl font-light max-w-3xl ml-12 mt-auto mb-20">
        <q>
          The Internet of Things has the potential to change the world, just as
          the internet did. Maybe even more so.
        </q>
        <br />
        <cite>Kevin Ashton</cite>
      </h2>
    </div>
  )
}

export default hero
