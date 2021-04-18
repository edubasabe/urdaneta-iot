import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
`

const Subtitle = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.7;
  color: #000000;
  margin-bottom: 3rem;
`

const headline = ({ title, subtitle }) => {
  return (
    <>
      <Title className="px-4 mb-4">{title}</Title>
      <Subtitle className="px-4 max-w-2xl mx-auto">{subtitle}</Subtitle>
    </>
  )
}

export default headline
