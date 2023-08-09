// import { getPayloadClient } from '../../payload/payloadClient';

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
  // const payload = await getPayloadClient();

  // const mainMenu = await payload.findGlobal({
  //   slug: 'main-menu'
  // });

  return <div>{children}</div>;
};

export default SiteLayout;
