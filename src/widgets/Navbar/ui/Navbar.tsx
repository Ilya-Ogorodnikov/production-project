import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        className={cls.links}
        onClick={handleToggleModal}
      >
        {t('Войти')}
      </Button>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde natus omnis pariatur ratione ex ducimus tempore.
      </Modal>
    </div>
  );
};
