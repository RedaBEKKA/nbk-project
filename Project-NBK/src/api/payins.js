import api from './apiInstance';

export async function getAllPayins(payload) {
  return api
    .get(`/payins`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function getSinglePayin(payload) {
  return api
    .get(`/payins/${payload.id}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function deletePayin(payload) {
  return api
    .delete(`/payins/${payload.id}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function getFilteredPayins(payload) {
  const params = {
    ...payload,
  };
  return api
    .get(`/payins`, { params })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
