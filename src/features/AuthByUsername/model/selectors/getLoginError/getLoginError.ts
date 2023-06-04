import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
