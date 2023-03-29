import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogoMain.module.css';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 18:53 */
export const LogoMain: FC<Props> = memo(function LogoMain(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon} />
      </div>
    </div>
  );
});
