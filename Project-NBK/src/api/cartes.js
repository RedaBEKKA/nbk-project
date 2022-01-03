import api from './apiInstance';

export async function getAllCartes(payload) {
  return api
    .get(`/cards`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function getSingleCarte(payload) {
  return api
    .get(`/cards/${payload.id}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function getFilteredCartes(payload) {
  const params = {
    ...payload,
  };
  return api
    .get(`/cards`, { params })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
