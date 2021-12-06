import api from './apiInstance';

export async function getAppToken() {
  try {
    const res = await api.get(
      `/authentication/oauth2/token/${process.env.REACT_APP_CLIENTID}/${process.env.REACT_APP_CLIENT_SECRET}`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function login(values) {
  console.log(values);
  try {
    const res = await api.get(`/authentication/users/${values.email}/${values.password}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function forgetPassword(email) {
  try {
    const res = await api.get(`/authentication/forgot/password/users/${email}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function confirmForgetPassword({ email, password, code }) {
  try {
    const res = await api.get(
      `/authentication/confirm/forgotPassword/users/${email}/${password}/${code}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}
