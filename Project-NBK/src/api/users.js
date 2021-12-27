
import api from './apiInstance';

export async function getUsers(payload) {
  return api
      .get(`/users?userStatus=${payload?.userStatus || 'VALIDATED'}`)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }

  export async function getFilteredUsers(payload) {
    const params = {
      sortOrder: 'DESC',
      userStatus: 'VALIDATED',
      ...payload,
    };
    return api
      .get(`/users`, { params })
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }