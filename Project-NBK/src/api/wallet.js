import api from './apiInstance';

export async function getAllWallets(payload) {
  return api
    .get(`/wallets?walletTypeId=9&walletStatus=${payload?.walletStatus || 'validated'}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function getFilteredWallets(payload) {
  const params = {
    walletTypeId: 9,
    walletStatus: 'validated',
    orderBy: 'createdDate',
    sortOrder: 'DESC',
    ...payload,
  };
  return api
    .get(`/wallets`, { params })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
