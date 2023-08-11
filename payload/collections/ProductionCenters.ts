import type { CollectionConfig } from 'payload/types'

export const ProductionCenters: CollectionConfig = {
  slug: 'production-centers',
  labels: {
    singular: {
      en: 'Production Center',
      no: 'Produksjonssenter',
    },
    plural: {
      en: 'Production Centers',
      no: 'Produksjonssentre',
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
      required: true,
    },
    {
      name: 'address',
      label: {
        en: 'Address',
        no: 'Adresse',
      },
      type: 'text',
      // Todo: replace with autofill address field
    },
    // Todo: Add leveranseområde/delivery-zone field with a map over norway divided by postnummer, where you can select multiple postnummer to create a delivery zone
    {
      name: 'priceZones',
      label: {
        en: 'Zones',
        no: 'Soner',
      },
      type: 'relationship',
      relationTo: 'price-zones',
      hasMany: true,
      required: true,
      admin: {
        description: 'The zones this production center can distribute to',
      },
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
  timestamps: true,
}
