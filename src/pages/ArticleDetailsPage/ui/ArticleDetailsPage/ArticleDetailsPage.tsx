import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {} = props;
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleDetailsPage)}>ArticleDetailsPage</div>
  );
};

export default memo(ArticleDetailsPage);
