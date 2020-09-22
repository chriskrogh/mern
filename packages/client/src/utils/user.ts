import { UserDoc } from '@mern/shared';

import { makeRequest } from './makeRequest';
import { METHOD } from '../types/method';

export const getUsers = async (): Promise<UserDoc[]> =>
  await makeRequest<UserDoc[]>(METHOD.GET, '/api/user');

export const createUser = async (
  email: string,
  name: string,
): Promise<UserDoc> =>
  await makeRequest<UserDoc>(METHOD.POST, '/api/user', {
    email,
    name,
  });
