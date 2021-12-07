import api from './apiInstance';

export async function getAppToken() {
  return api
    .get(
      `/authentication/oauth2/token/${process.env.REACT_APP_CLIENTID}/${process.env.REACT_APP_CLIENT_SECRET}`
    )
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function login({ email, password }) {
  return api
    .get(`/authentication/users/${email}/${password}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function forgetPassword(email) {
  return api
    .get(`/authentication/forgot/password/users/${email}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export async function confirmForgetPassword({ email, password, code }) {
  return api
    .get(`/authentication/confirm/forgotPassword/users/${email}/${password}/${code}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
