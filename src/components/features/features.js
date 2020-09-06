import React from 'react'
import Headline from '../../shared/headline/headline'
import Feature from './feature/feature'

const features = () => {
  return (
    <>
      <Headline
        title="Sabemos lo que hacemos"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna."
      />

      <Feature
        icon="home"
        title="Soluciones particulares"
        description="Domótica en casas y apartamentos particulares"
      />
      <Feature
        icon="building"
        title="Soluciones para Condominios"
        description="Wifi para y conexión para todo el condiminio"
      />

      <Feature
        icon="business"
        title="Soluciones Empresariales"
        description="Solucionamos problemas que tienen las empresas"
      />
    </>
  )
}

export default features
