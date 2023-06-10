import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslations = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const handleChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    const numberPattern = /[^0-9]/g;

    if (value?.match(numberPattern)) return;

    dispatch(profileActions.updateProfile({
      age: Number(value || 0),
    }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({
      currency,
    }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({
      country,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorsTranslations[error]}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={handleChangeFirstname}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
