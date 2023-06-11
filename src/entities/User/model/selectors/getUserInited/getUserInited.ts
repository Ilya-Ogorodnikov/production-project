import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getUserInited = (state: StateSchema) => state.user._inited;
