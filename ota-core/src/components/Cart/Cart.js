import React from 'react'
import PropTypes from 'prop-types'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { Button } from '../common/Button/Button'
import { Card } from '../common/Card/index'
import './cart.css'

export const Cart = ({ cart }) => {
  return (
    <div className="w-96">
      <Card>
        <SimpleBar className="max-h-96 overflow-x-hidden overscroll-y-contain px-4">
          {cart.map((opt) => (
            <div
              className="cart-entry py-1 grid border-b border-solid"
              key={opt.id}
            >
              <div
                className="thumb bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url( http://localhost:1337' +
                    opt.thumbnail.formats.thumbnail.url +
                    ')',
                }}
              ></div>
              <div className="py-4 px-2 detail flex flex-col">
                <h3>{opt.name}</h3>
                <p>{opt.shortDescription}</p>
                <div className="more-detail flex flex-row items-center justify-between">
                  <span>{opt.size ? `Size: ${opt.size}` : 'One Size'}</span>
                  <span>QTY: {opt.quantity}</span>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
              <h3 className="mt-3">${opt.price}</h3>
            </div>
          ))}
        </SimpleBar>
        <div className="cart-entry pt-4 px-4 grid">
          <span
            className="col-start-2 text-base pl-2"
            style={{ color: '#585757' }}
          >
            Total:
          </span>
          <h3>
            ${cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0)}
          </h3>
        </div>
        <div className="p-4">
          <Button label="Go to Checkout" primary />
          <Button icon="FaShoppingCart" label="Show Cart" />
        </div>
      </Card>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
}

Cart.defaultProps = {
  cart: [],
}
