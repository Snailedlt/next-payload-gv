import type { CollectionConfig } from "payload/types";

export const Ranges: CollectionConfig = {
  slug: "ranges",
  labels: {
    singular: "Range",
    plural: "Ranges",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "start",
      label: "Start (in km)",
      type: "text",
    },
    {
      name: "end",
      label: "End (in km)",
      type: "text",
    },
  ],
  // admin: {
  //   useAsTitle: "name",
  //   group: "Delivery",
  // },
  timestamps: true,
};
