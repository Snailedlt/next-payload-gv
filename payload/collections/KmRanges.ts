import type { CollectionConfig } from "payload/types";

export const KmRanges: CollectionConfig = {
  slug: "km-ranges",
  labels: {
    singular: {
      en: "Kilometer Range",
      no: "Kilometerintervall",
    },
    plural: {
      en: "Kilometer Ranges",
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
      admin: {
        style: {
          display: "none",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // ensures data is not stored in DB
            siblingData.name = undefined
          }
        ],
        afterRead: [
          ({ data }) => {
            if (data) data.name = `${data.start} - ${data.end} km`
          }
        ],
      }
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
  access: {
    read: () => true,
  },
  timestamps: true,
};
