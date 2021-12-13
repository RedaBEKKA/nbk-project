import api from './apiInstance';

export async function Register() {
    return api
      .post(
        `/users`
      )
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }