
import { CollectionBeforeChangeHook } from 'payload/types'
import getPayloadClient from '../../../payloadClient';

export const BeforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
}) => {
  const payload = await getPayloadClient();
  const range = await payload.findByID({ collection: 'km-ranges', id: data.range })
  const priceDescription: string = await data.priceType === 'fixed' ? 'nok' : 'nok/km' ?? 'fallback'
  return {
    ...data,
    name: range.name + ' - ' + data.price + ' ' + priceDescription
  }
}