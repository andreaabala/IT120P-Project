import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ABOUTUS.module.css';
import { CirclesBg } from './CirclesBg/CirclesBg.js';
import { JettiLogoIcon } from './JettiLogoIcon.js';
import { NavMenu } from './NavMenu/NavMenu.js';
import { OrangeCircles } from './OrangeCircles/OrangeCircles.js';
import { OurCompany } from './OurCompany/OurCompany.js';
import { OurMission } from './OurMission/OurMission.js';
import { TheJettiStory } from './TheJettiStory/TheJettiStory.js';

interface Props {
  className?: string;
}
/* @figmaId 54:410 */
export const ABOUTUS: FC<Props> = memo(function ABOUTUS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <OrangeCircles className={classes.orangeCircles} />
      <CirclesBg className={classes.greenCircles} />
      <OurCompany className={classes.ourCompany} />
      <TheJettiStory className={classes.theJettiStory} />
      <OurMission className={classes.ourMission} />
      <NavMenu
        classes={{ img: classes.img }}
        swap={{
          jettiLogo: <JettiLogoIcon className={classes.icon} />,
        }}
        text={{
          _2: <div className={classes._2}>2</div>,
        }}
      />
      <div className={classes.rectangle17}></div>
    </div>
  );
});
