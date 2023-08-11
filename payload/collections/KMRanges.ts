import type { CollectionConfig } from "payload/types";

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
  fields: [
    {
      name: "name",
      label: {
        en: "Name",
        no: "Navn",
      },
      type: "text",
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
