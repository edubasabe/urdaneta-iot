import React from 'react'
import Headline from '../../shared/headline/headline'
import Feature from './feature/feature'

const features = () => {
  return (
    <>
      <section className="features container mx-auto my-6">
        <Headline
          title="Sabemos lo que hacemos"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna."
        />
        <ul className="flex flex-col md:flex-row">
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
        </ul>
      </section>
    </>
  )
}

export default features
