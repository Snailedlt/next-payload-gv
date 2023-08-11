import getPayloadClient from "../../payload/payloadClient";


export default async function Home() {
  const payload = await getPayloadClient();

  const kmRanges = await payload.find({
      collection: "km-ranges",
    });
  return (
    <div>
      <h1>Ranges</h1>
      <p>{JSON.stringify(kmRanges)}</p>
    </div>
  );
}
