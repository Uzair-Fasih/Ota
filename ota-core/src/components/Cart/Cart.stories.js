import React from 'react'

import { Cart } from './Cart'

export default {
  title: 'Custom/Cart',
  component: Cart,
}

const Template = (args) => <Cart {...args} />

export const Basic = Template.bind({})
Basic.args = {
  cart: [
    {
      id: 1,
      name: 'Off-White',
      shortDescription: 'ODSY-1000 ribbed-knit beanie',
      price: 715,
      size: '',

      quantity: 1,
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
    },
    {
      id: 2,
      name: 'Heron Preston',
      shortDescription: 'No graphic print T-shirt',
      price: 240,
      size: 'M',
      quantity: 1,
      thumbnail: {
        id: 6,
        name: 'heron_shirt.PNG',
        alternativeText: '',
        caption: '',
        width: 480,
        height: 472,
        formats: {
          thumbnail: {
            hash: 'thumbnail_heron_shirt_ec3b6eeb29',
            mime: 'image/png',
            url: '/uploads/thumbnail_heron_shirt_ec3b6eeb29.PNG',
          },
        },
      },
    },
    {
      id: 3,
      name: 'Canada Goose',
      shortDescription: 'High Quality Custom Apparel',
      price: 238,
      size: null,

      quantity: 1,
      thumbnail: {
        id: 4,
        name: 'hoodie.png',
        alternativeText: '',
        caption: '',
        width: 360,
        height: 360,
        formats: {
          thumbnail: {
            hash: 'thumbnail_hoodie_698c54759e',
            mime: 'image/png',
            url: '/uploads/thumbnail_hoodie_698c54759e.png',
          },
        },
      },
    },
    {
      id: 4,
      name: 'Sierra Bright',
      shortDescription: ' Low-top sneakers',
      price: 715,
      size: '43',
      quantity: 1,
      thumbnail: {
        id: 7,
        name: 'shoes.png',
        alternativeText: '',
        caption: '',
        width: 1000,
        height: 1000,
        formats: {
          thumbnail: {
            hash: 'thumbnail_shoes_3673b8b3b8',
            mime: 'image/png',
            url: '/uploads/thumbnail_shoes_3673b8b3b8.png',
          },
        },
      },
    },
  ],
}
