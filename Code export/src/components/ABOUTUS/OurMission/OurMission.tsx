import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OurMission.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:397 */
export const OurMission: FC<Props> = memo(function OurMission(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ourMission}>Our Mission</div>
      <div className={classes.toProvideAffordableAccessibleT}>
        <div className={classes.textBlock}>
          To provide affordable, accessible top-quality fuel. Powering industries and empowering
        </div>
        <div className={classes.textBlock2}>communities. Jetti believes it is possible</div>
        <div className={classes.textBlock3}>to concurrently engage in business and</div>
        <div className={classes.textBlock4}>enable progress that can be felt by anyone and everyone.</div>
      </div>
    </div>
  );
});
