import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BadgeQuantityIndicatorDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    box?: string;
  };
  text?: {
    _99?: ReactNode;
  };
}
/* @figmaId 18:41 */
export const BadgeQuantityIndicatorDefault: FC<Props> = memo(function BadgeQuantityIndicatorDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.box || ''} ${classes.box}`}></div>
      {props.text?._99 != null ? props.text?._99 : <div className={classes._99}>99</div>}
    </div>
  );
});
