import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSceleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className, articles, isLoading, view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading
        && new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
          ))}
    </div>
  );
});
