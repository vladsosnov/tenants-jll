import type { FC } from 'react';
interface TagProps {
  title?: string;
}
export const Tag: FC<TagProps> = ({ title = 'My title' }) => {
  return <div style={{ backgroundColor: 'yellow' }}>{title}</div>;
};
