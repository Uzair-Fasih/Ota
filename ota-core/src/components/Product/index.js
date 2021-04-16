import React from 'react'
import PropTypes from 'prop-types'
const FaIcons = require('react-icons/fa')
import { Card } from '../common/Card'
import { Button } from '../common/Button/Button'
import './product.css'

const Badge = ({ kind }) => {
  const Icon = FaIcons[kind === 'New Season' ? 'FaStar' : 'FaTag']
  const styles =
    kind === 'New Season'
      ? 'text-gray-600 bg-gray-50 border-gray-900'
      : 'text-red-400 bg-red-200 border-red-300'
  return (
    <div
      className={`badge h-7 flex flex-row items-center justify-center px-3 py-2 text-sm ${styles}`}
    >
      <Icon />
      <p>{kind}</p>
    </div>
  )
}

Badge.propTypes = {
  kind: PropTypes.string,
}

export const Product = (props) => {
  const Icon = FaIcons['FaRegBookmark']
  const DeliveryIcon = FaIcons['FaShippingFast']
  return (
    <div className="w-72">
      <Card>
        <div className="px-5 py-4 flex flex-col">
          <div className="flex flex-row justify-between">
            {props.badge && props.badge.length > 0 ? (
              <Badge kind={props.badge} />
            ) : (
              <span />
            )}
            <button className="text-gray-500 h-8 flex flex-row align-center justify-center text-lg">
              <Icon />
            </button>
          </div>
          <div
            className="thumbnail h-40 bg-no-repeat bg-center my-5"
            style={{
              backgroundImage:
                'url(http://localhost:1337' +
                props.thumbnail.formats.thumbnail.url +
                ')',
            }}
          />
          <div className="detail flex flex-col items-center">
            <h3>{props.name}</h3>
            <p className="py-1 text-sm text-center">{props.shortDescription}</p>
            <h3>${props.price}</h3>
          </div>

          <div className="mt-6">
            <Button icon="FaCartPlus" label="Add to cart" primary />
          </div>
          <div className="flex flex-row justify-center items-center my-5">
            <div className="text-gray-500 flex-grow flex flex-row justify-center text-2xl">
              <DeliveryIcon />
            </div>
            <div className="delivery flex-grow flex flex-col justify-center">
              <p className="text-gray-700 text-sm">Estimated Delivery</p>
              <h4 className="text-sm">Apr 15 - Apr 21</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  badge: PropTypes.string,
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.shape({
    formats: {
      thumbnail: {
        url: PropTypes.string.isRequired,
      },
    },
  }),
}
