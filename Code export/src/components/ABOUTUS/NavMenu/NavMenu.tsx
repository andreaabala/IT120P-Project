import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { LogoMain } from '../LogoMain/LogoMain.js';
import { NavigationHorizontalElementsCa } from '../NavigationHorizontalElementsCa/NavigationHorizontalElementsCa.js';
import { NavigationHorizontalElementsIt } from '../NavigationHorizontalElementsIt/NavigationHorizontalElementsIt.js';
import { NavigationHorizontalElementsPr } from '../NavigationHorizontalElementsPr/NavigationHorizontalElementsPr.js';
import { NavigationHorizontalElementsSh } from '../NavigationHorizontalElementsSh/NavigationHorizontalElementsSh.js';
import { SecondaryItems } from '../SecondaryItems/SecondaryItems.js';
import { TextfieldSearchDefault } from '../TextfieldSearchDefault/TextfieldSearchDefault.js';
import { DividerIcon } from './DividerIcon.js';
import { JettiLogoIcon } from './JettiLogoIcon.js';
import classes from './NavMenu.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    img?: string;
  };
  swap?: {
    jettiLogo?: ReactNode;
  };
  text?: {
    _2?: ReactNode;
  };
}
/* @figmaId 35:166 */
export const NavMenu: FC<Props> = memo(function NavMenu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <NavigationHorizontalElementsSh
        className={classes.nav}
        swap={{
          divider: <DividerIcon className={classes.icon} />,
        }}
      />
      <NavigationHorizontalElementsPr
        className={classes.nav2}
        classes={{ img: `${props.classes?.img || ''} ${classes.img}` }}
      />
      <NavigationHorizontalElementsCa
        className={classes.nav3}
        classes={{ box: classes.box }}
        swap={{
          vector: <VectorIcon className={classes.icon2} />,
          vector2: <VectorIcon2 className={classes.icon3} />,
          vector3: <VectorIcon3 className={classes.icon4} />,
        }}
        text={{
          _99: props.text?._2 || <div className={classes._2}>2</div>,
        }}
      />
      <TextfieldSearchDefault className={classes.searchTextfield} />
      <div className={classes.jettiLogo}>{props.swap?.jettiLogo || <JettiLogoIcon className={classes.icon5} />}</div>
      <NavigationHorizontalElementsIt
        className={classes.categories}
        text={{
          itemLabel: <div className={classes.itemLabel}>About Us</div>,
        }}
      />
      <div className={classes.products}>Products</div>
      <div className={classes.menuItems}>
        <SecondaryItems
          text={{
            itemLabel: <div className={classes.itemLabel2}>Contact</div>,
          }}
        />
        <div className={classes.nav4}>
          <div className={classes.itemLabel3}>My orders</div>
        </div>
      </div>
    </div>
  );
});
