import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={cls.ArticleDetailsPage}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage)}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
