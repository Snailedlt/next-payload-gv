import getPayloadClient from "../../payload/payloadClient";


export default async function Home() {
  const payload = await getPayloadClient();

  const ranges = await payload.find({
      collection: "ranges",
    });
  return (
    <div>
      <h1>Ranges</h1>
      <p>{JSON.stringify(ranges)}</p>
    </div>
  );
}
