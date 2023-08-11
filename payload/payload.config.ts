import path from "path";
import { buildConfig } from "payload/config";
import { KmRanges } from "./collections/KmRanges";
import BeforeDashboard  from "./components/BeforeDashboard";
import { Packagings } from "./collections/Packagings";
import { PriceZones } from "./collections/PriceZones";
import { ProductionCenters } from "./collections/ProductionCenters";

export default buildConfig({
  admin: {
    components: {
      beforeDashboard: [BeforeDashboard],
    },
  },
  collections: [KmRanges, Packagings, PriceZones, ProductionCenters],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  cors: ["http://localhost:3000"],
  csrf: ["http://localhost:3000"],
  i18n: {
    fallbackLng: "no",
  },
});
