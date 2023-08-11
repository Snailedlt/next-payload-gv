import path from "path";
import { buildConfig } from "payload/config";
import { Ranges } from "./collections/Ranges";
import BeforeDashboard  from "./components/BeforeDashboard";

export default buildConfig({
  admin: {
    components: {
      beforeDashboard: [BeforeDashboard],
    },
  },
  collections: [Ranges],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  cors: ["http://localhost:3000"],
  csrf: ["http://localhost:3000"],
});
