import type { CollectionConfig } from 'payload/types'

export const Packagings: CollectionConfig = {
  slug: 'packagings',
  labels: {
    singular: {
      en: 'Packaging',
      no: 'Emballasje',
    },
    plural: {
      en: 'Packagings',
      no: 'Emballasjer',
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
    },
    {
      name: 'priceZones',
      label: {
        en: 'Available in zones',
        no: 'Tilgjengelig i soner',
      },
      type: 'relationship',
      relationTo: 'price-zones',
      hasMany: true,
    },
    {
      name: 'unit_of_measure',
      label: {
        en: 'Unit of measure',
        no: 'Måleenhet',
      },
      defaultValue: 'metric_tonnes',
      type: 'select',
      options: [
        {
          label: {
            en: 'Metric Tonnes (e.g. 1.5 tonnes)',
            no: 'Metriske tonn (f.eks. 1,5 tonn)',
          },
          value: 'metric_tonnes',
        },
        {
          label: {
            en: "Amount (e.g. 1 piece)",
            no: "Antall (f.eks. 1 stk)",
          },
          value: 'amount',
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
  timestamps: true,
}
