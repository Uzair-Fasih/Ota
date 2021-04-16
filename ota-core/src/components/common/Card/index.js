import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

export const Card = (props) => {
  return (
    <div className="card rounded-md border border-solid border-gray-200 flex flex-col select-none bg-white cart-card">
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.object,
}
