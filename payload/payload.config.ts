import path from "path";
import { buildConfig } from "payload/config";
import { KmRanges } from "./collections/KmRanges";
import BeforeDashboard  from "./components/BeforeDashboard";

export default buildConfig({
  admin: {
    components: {
      beforeDashboard: [BeforeDashboard],
    },
  },
  collections: [KmRanges],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  cors: ["http://localhost:3000"],
  csrf: ["http://localhost:3000"],
  i18n: {
    fallbackLng: "no",
  },
});
