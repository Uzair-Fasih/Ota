import React from 'react'
import { Product } from './index'

export default {
  title: 'Custom/Product',
  component: Product,
}

const Template = (args) => <Product {...args} />

export const Basic = Template.bind({})
Basic.args = {
  id: 1,
  name: 'Off-White',
  shortDescription: 'ODSY-1000 ribbed-knit beanie',
  price: 715,
  size: '',
  badge: 'New Season',
  thumbnail: {
    id: 5,
    name: 'beanie.PNG',
    alternativeText: '',
    caption: '',
    width: 490,
    height: 531,
    formats: {
      thumbnail: {
        hash: 'thumbnail_beanie_d2bbba7f1a',
        mime: 'image/png',
        url: '/uploads/thumbnail_beanie_d2bbba7f1a.PNG',
      },
    },
  },
}
