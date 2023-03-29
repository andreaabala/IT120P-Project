import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OurCompany.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:399 */
export const OurCompany: FC<Props> = memo(function OurCompany(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.jettiPetroleumIncIsA100Filipin}>
        <div className={classes.textBlock}>Jetti Petroleum Inc. is a 100% Filipino- owned</div>
        <div className={classes.textBlock2}>independent oil company committed to providing</div>
        <div className={classes.textBlock3}>fair priced and high quality petroleum products.</div>
        <div className={classes.textBlock4}>Currently the company has over one hundred and </div>
        <div className={classes.textBlock5}>fifty gas stations located across Luzon, Visayas, </div>
        <div className={classes.textBlock6}>and Mindanao.</div>
        <div className={classes.textBlock7}> </div>
      </div>
      <div className={classes.ourCompany}>Our Company</div>
    </div>
  );
});
