import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { FC, memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo((props) => {
  const { className, block } = props;
  return (
    <div>
      <img src={block.src} alt={block.src} className={cls.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
