import type { CollectionConfig } from 'payload/types'
import { BeforeChangeHook } from './hooks/beforeChange'

export const PriceZones: CollectionConfig = {
  slug: 'price-zones',
  labels: {
    singular: {
      en: 'Price Zone',
      no: 'Prissone',
    },
    plural: {
      en: 'Price Zones',
      no: 'Prissoner',
    },
  },
  hooks: {
    beforeChange: [BeforeChangeHook],
  },
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        no: 'Navn',
      },
      type: 'text',
      admin: {
        position: 'sidebar',
        style: {
          display: 'none',
      },
    },
    },
    {
      name: 'kmRange',
      label: {
        en: 'Kilometer Range',
        no: 'Kilometerintervall',
      },
      type: 'relationship',
      relationTo: 'km-ranges',
      required: true,
    },
    {
      name: 'priceType',
      type: 'radio',
      defaultValue: 'fixed',
      options: [
        {
          label: {
            en: 'Fixed Price',
            no: 'Fast pris',
          },
          value: 'fixed',
        },
        {
          label: {
            en: 'Price per km',
            no: 'Pris per km',
          },
          value: 'perkm',
        },
      ],
      admin: {
        layout: 'horizontal',
        width: '100%',
      },
    },
    {
      name: 'price',
      label: {
        en: 'Price (in nok)',
        no: 'Pris (i nok)',
      },
      type: 'text',
      required: true,
      defaultValue: '0',
    },
  ],
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'range', 'price', 'priceType'],
  },
  timestamps: true,
}
