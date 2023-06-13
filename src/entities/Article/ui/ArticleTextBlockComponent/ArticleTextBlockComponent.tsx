import { FC, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props) => {
  const { className, block } = props;
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={cls.paragraph}
        />
      ))}
    </div>
  );
});
