import React from 'react'
import PropTypes from 'prop-types'
const FaIcons = require('react-icons/fa')
import './button.css'

const Content = ({ iconName, label }) => {
  if (iconName && FaIcons[iconName]) {
    const Icon = FaIcons[iconName]
    return (
      <div className="flex flex-row justify-center items-center">
        <Icon className="icon" /> {label}
      </div>
    )
  }
  return <div>{label}</div>
}

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  icon,
  ...props
}) => {
  const mode = primary ? 'oka-button--primary' : 'oka-button--secondary'
  return (
    <button
      type="button"
      className={['oka-button', `oka-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <Content iconName={icon} label={label} />
    </button>
  )
}

Content.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string,
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
  onClick: undefined,
}
