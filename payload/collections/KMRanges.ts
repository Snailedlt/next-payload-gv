import type { CollectionBeforeChangeHook, CollectionConfig } from "payload/types";

const BeforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
}) => {
  return {
    ...data,
    name: `${data.start}-${data.end} km`
  }
}

export const KmRanges: CollectionConfig = {
  slug: "km-ranges",
  labels: {
    singular: {
      en: "Kilometer range",
      no: "Kilometerintervall",
    },
    plural: {
      en: "Kilometer ranges",
      no: "Kilometerintervaller",
    }
  },
  hooks: {
    beforeChange: [BeforeChangeHook],
  },
  fields: [
    {
      name: "name",
      label: {
        en: "Name",
        no: "Navn",
      },
      type: "text",
      admin: {
        style: {
          display: 'none',
        },
      },
    },
    {
      name: "start",
      label: {
        en: "Start (in km)",
        no: "Start (i km)",
      },
      type: "text",
    },
    {
      name: "end",
      label: {
        en: "End (in km)",
        no: "Slutt (i km)",
      },
      type: "text",
    },
  ],
  admin: {
    useAsTitle: "name",
  },
  timestamps: true,
};
