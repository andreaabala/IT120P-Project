import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './NavigationHorizontalElementsIt.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    itemLabel?: ReactNode;
  };
}
/* @figmaId 18:51 */
export const NavigationHorizontalElementsIt: FC<Props> = memo(function NavigationHorizontalElementsIt(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.itemLabel != null ? props.text?.itemLabel : <div className={classes.itemLabel}>Item label</div>}
    </div>
  );
});
