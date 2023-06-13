import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {

}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {} = props;
  return (
    <div className={classNames(cls.ArticlesPage)}>ArticlesPage</div>
  );
};

export default memo(ArticlesPage);
