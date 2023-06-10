import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const profileData = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'admin123',
  first: 'admin',
  city: 'Mos',
  currency: Currency.USD,
};

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('without first and lastname', () => {
    const result = validateProfileData({
      ...profileData,
      first: '',
      lastname: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', () => {
    const result = validateProfileData({
      ...profileData,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual(
      [
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
      ],
    );
  });
});
