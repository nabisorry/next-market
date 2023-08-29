import { purchaseAxios } from '..';

export type PurchaseParams = {
  productId: number;
};

const purchase = async (
  params: PurchaseParams,
): Promise<{ message: string }> => {
  return (await purchaseAxios.post('', params)).data;
};

export default purchase;
