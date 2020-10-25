import React from 'react'
import FooterLink from './footerLink/footerLink'
const Footer = () => {
  return (
    <footer className="footer bg-gray-200 py-4 px-3 md:py-16 md:pb-4">
      <div className="flex flex-col md:flex-row mx-auto container justify-between">
        <div className="section-1 max-w-xs">
          <h4 className="text-lg font-bold mb-4">URDANETA IOT</h4>
          <p>
            Urdaneta IOT. Consultoría tecnológica para domicilios, condominios e
            industrias.
          </p>
        </div>
        <div className="section-2 my-4">
          <h4 className="text-lg font-bold mb-4">INFORMACIÓN DE CONTACTO</h4>
          <ul>
            <li>
              <FooterLink
                icon="whatsapp"
                text="+56 9 9999 9999"
                link="tel:+56 9 9999 9999"
              />
            </li>
            <li>
              <FooterLink
                icon="email"
                text="info@urdaneta-iot.com"
                link="mailto:info@urdaneta-iot.com"
              />
            </li>
          </ul>
        </div>

        <div className="section-2 my-4">
          <h4 className="text-lg font-bold mb-4">REDES SOCIALES</h4>
          <ul>
            <li>
              <FooterLink icon="instagram" text="Instagram" link="#" />
            </li>
            <li>
              <FooterLink icon="facebook" text="Facebook" link="#" />
            </li>
            <li>
              <FooterLink icon="youtube" text="YouTube" link="#" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container mx-auto">
        <p className="text-xs md:text-base text-center md:text-left">
          © {new Date().getFullYear()} Urdaneta IOT. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
