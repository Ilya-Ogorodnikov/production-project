import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => (
  <div className={classNames(cls.ArticlesPage)} />
);

export default memo(ArticlesPage);
