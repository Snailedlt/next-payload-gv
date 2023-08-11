import path from "path";
import { buildConfig } from "payload/config";
import { KmRanges } from "./collections/KmRanges";
import BeforeDashboard  from "./components/BeforeDashboard";
import { Packagings } from "./collections/Packagings";
import { PriceZones } from "./collections/PriceZones";
import { ProductionCenters } from "./collections/ProductionCenters";
import { CollectionConfig } from "payload/types";

const groupCollections = (group: string | Record<string, string>, collections: CollectionConfig[]): CollectionConfig[] => {
  return collections.map(collection => {
    return {
      ...collection,
      admin: {
        ...collection.admin,
        group,
      },
    }
  })
}
const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

export default buildConfig({
  admin: {
    components: {
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          [path.resolve(__dirname, 'collections/PriceZones/hooks/beforeChange')]: mockModulePath,
        },
      },
    }),
  },
  collections: [
    ...groupCollections({en: 'Delivery', no: 'Leveranse'}, [KmRanges, PriceZones, ProductionCenters]),
    ...groupCollections({en: 'Products', no: 'Produkter'}, [Packagings]),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  cors: ["http://localhost:3000"],
  csrf: ["http://localhost:3000"],
  i18n: {
    fallbackLng: "no",
  },
});
