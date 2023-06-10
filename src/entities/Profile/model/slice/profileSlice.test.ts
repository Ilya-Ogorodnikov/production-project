import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const profileData = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'admin123',
  first: 'admin',
  city: 'Mos',
  currency: Currency.USD,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateError: undefined,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123456',
      }),
    )).toEqual({
      form: {
        username: '123456',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test update profile service fullfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profileData, ''),
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: profileData,
      data: profileData,
    });
  });
});
