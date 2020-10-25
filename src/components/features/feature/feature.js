import React from 'react'
import PropTypes from 'prop-types'
import { FiHome, FiBriefcase } from 'react-icons/fi'
import { FaRegBuilding } from 'react-icons/fa'

const Feature = ({ icon, title, description }) => {
  let featureIcon
  switch (icon) {
    case 'home':
      featureIcon = <FiHome size="1.5rem" />
      break
    case 'building':
      featureIcon = <FaRegBuilding size="1.5rem" />
      break
    case 'business':
      featureIcon = <FiBriefcase size="1.5rem" />
      break
    default:
      featureIcon = null
      break
  }
  return (
    <li className="flex flex-col justify-center items-center px-4 py-4 max-w-xs mx-auto">
      <span className="bg-gray-200 p-8 flex w-auto rounded-full mb-6">
        {featureIcon}
      </span>
      <h4 className="mb-0 text-lg font-bold">{title}</h4>
      <p className="text-center">{description}</p>
    </li>
  )
}

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
