import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TheJettiStory.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:398 */
export const TheJettiStory: FC<Props> = memo(function TheJettiStory(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.sinceItsDebutAsAASupplierOfFue}>
        <div className={classes.textBlock}>Since its debut as a a supplier of fuels to industrial</div>
        <div className={classes.textBlock2}>firms and transport terminals in 1998, Jetti has </div>
        <div className={classes.textBlock3}>expanded its services to include retailing.</div>
        <div className={classes.textBlock4}>With over one hundred and fifty Jetti retail station</div>
        <div className={classes.textBlock5}>across Luzon, Visayas and Mindanao, Jetti</div>
        <div className={classes.textBlock6}>continues its commitment to Filipino communities</div>
        <div className={classes.textBlock7}>with access to fair priced, quality fuels as it </div>
        <div className={classes.textBlock8}>continues to expand its footprint </div>
        <div className={classes.textBlock9}>nationwide.</div>
      </div>
      <div className={classes.theJettiStory}>The Jetti Story</div>
    </div>
  );
});
