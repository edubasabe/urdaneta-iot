import React from 'react'
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const FooterLink = ({ icon, text, link }) => {
  let footerIcon
  switch (icon) {
    case 'whatsapp':
      footerIcon = <FaWhatsapp />
      break
    case 'email':
      footerIcon = <HiOutlineMail />
      break
    case 'instagram':
      footerIcon = <FaInstagram />
      break
    case 'facebook':
      footerIcon = <FaFacebookSquare />
      break
    case 'youtube':
      footerIcon = <FaYoutube />
      break
    default:
      footerIcon = null
      break
  }
  return (
    <a href={link} className="flex items-center">
      <span className="mr-2">{footerIcon}</span>
      {text}
    </a>
  )
}

export default FooterLink
