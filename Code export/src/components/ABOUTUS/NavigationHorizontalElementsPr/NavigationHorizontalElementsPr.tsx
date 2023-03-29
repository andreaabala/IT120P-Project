import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AvatarOtherMainAvatar } from '../AvatarOtherMainAvatar/AvatarOtherMainAvatar.js';
import classes from './NavigationHorizontalElementsPr.module.css';

interface Props {
  className?: string;
  classes?: {
    img?: string;
    root?: string;
  };
}
/* @figmaId 18:26 */
export const NavigationHorizontalElementsPr: FC<Props> = memo(function NavigationHorizontalElementsPr(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.box}></div>
      <AvatarOtherMainAvatar
        className={classes.avatarOtherMainAvatar}
        classes={{ img: `${props.classes?.img || ''} ${classes.img}` }}
      />
    </div>
  );
});
