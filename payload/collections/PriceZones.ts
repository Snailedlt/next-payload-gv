import type { CollectionConfig } from 'payload/types'
import { FieldHook } from 'payload/types';

const getFullTitle: FieldHook = async ({ siblingData, data, req: { payload } }) => {
  if (data) {
    try {
      const kmRanges = await payload.findByID({ collection: 'km-ranges', id: data.kmRange });

      if (kmRanges) {
        const priceDescription: string = data.priceType === 'fixed' ? 'nok' : 'nok/km'
        siblingData.name =`${kmRanges.name} - ${data.price} ${priceDescription}`
      }
    } catch (err) {
      console.log(err)
    }
  }
};

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
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        no: 'Navn',
      },
      type: 'text',
      admin: {
        style: {
          display: 'none',
        },
      },
      hooks: {
        afterRead: [getFullTitle],
      }
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
