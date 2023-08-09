import React from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "../../../payload/payloadClient";

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug || "home",
      },
    },
  });

  const page = pages.docs[0];

  if (!page) return notFound();

  return (
    <React.Fragment>
      <h1>{page.title}</h1>
    </React.Fragment>
  );
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    limit: 0,
  });

  return pages.docs.map(({ slug }: { slug: string }) => ({ slug }));
}

export default Page;
