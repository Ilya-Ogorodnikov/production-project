import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => (
  <div className={classNames(cls.ArticlesPage)}>
    <ArticleList articles={[]} view={ArticleView.BIG} isLoading />
  </div>
);

export default memo(ArticlesPage);
