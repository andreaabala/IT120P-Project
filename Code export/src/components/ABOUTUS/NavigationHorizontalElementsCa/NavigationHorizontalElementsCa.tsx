import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BadgeQuantityIndicatorDefault } from '../BadgeQuantityIndicatorDefault/BadgeQuantityIndicatorDefault.js';
import { IconOutlinedOtherShopShoppingB } from '../IconOutlinedOtherShopShoppingB/IconOutlinedOtherShopShoppingB.js';
import classes from './NavigationHorizontalElementsCa.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    box?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
  };
  text?: {
    _99?: ReactNode;
  };
}
/* @figmaId 18:32 */
export const NavigationHorizontalElementsCa: FC<Props> = memo(function NavigationHorizontalElementsCa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.box2}></div>
      <IconOutlinedOtherShopShoppingB
        className={classes.iconOutlinedOtherShopShoppingB}
        swap={{
          vector: props.swap?.vector || <VectorIcon className={classes.icon} />,
          vector2: props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />,
          vector3: props.swap?.vector3 || <VectorIcon3 className={classes.icon3} />,
        }}
      />
      <BadgeQuantityIndicatorDefault
        className={classes.badgeQuantityIndicatorDefault}
        classes={{ box: props.classes?.box || '' }}
        text={{
          _99: props.text?._99 || <div className={classes._99}>4</div>,
        }}
      />
    </div>
  );
});
