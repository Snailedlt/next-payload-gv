import path from "path";
import { buildConfig } from "payload/config";
import { Ranges } from "./collections/Ranges";

export default buildConfig({
  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
  collections: [Ranges],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: ["http://localhost:3000"],
  csrf: ["http://localhost:3000"],
});
