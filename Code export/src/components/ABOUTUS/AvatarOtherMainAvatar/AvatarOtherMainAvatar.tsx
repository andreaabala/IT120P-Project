import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AvatarOtherMainAvatar.module.css';

interface Props {
  className?: string;
  classes?: {
    img?: string;
    root?: string;
  };
}
/* @figmaId 18:29 */
export const AvatarOtherMainAvatar: FC<Props> = memo(function AvatarOtherMainAvatar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.img || ''} ${classes.img}`}></div>
    </div>
  );
});
