import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';
import { Icon } from '../Icon/Icon';

interface CodeProps {
  className?: string;
  text: string;
}
export const Code: FC<CodeProps> = (props) => {
  const { text, className } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={handleCopy}
        className={cls.copyBtn}
        theme={ThemeButton.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};
