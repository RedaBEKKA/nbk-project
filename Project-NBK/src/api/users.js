
import api from './apiInstance';

export async function getUsers() {
  return api
      .get(
        `/users`
      )
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }