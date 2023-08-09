import payload from "payload";
import { CollectionAfterChangeHook } from "payload/types";

// const afterChangeHook: CollectionAfterChangeHook = async () => {
//   const ranges = await payload.find({
//     collection: "ranges",
//   });
//   return ranges;
// };

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>{JSON.stringify(ranges)}</p>
    </div>
  );
}
