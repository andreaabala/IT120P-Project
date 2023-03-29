import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { NavigationHorizontalElementsIt } from '../NavigationHorizontalElementsIt/NavigationHorizontalElementsIt.js';
import { DividerIcon } from './DividerIcon.js';
import classes from './SecondaryItems.module.css';

interface Props {
  className?: string;
  text?: {
    itemLabel?: ReactNode;
  };
}
/* @figmaId 18:184 */
export const SecondaryItems: FC<Props> = memo(function SecondaryItems(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <NavigationHorizontalElementsIt
        className={classes.categories}
        text={{
          itemLabel: props.text?.itemLabel || <div className={classes.itemLabel}>Products</div>,
        }}
      />
      <div className={classes.divider}>
        <DividerIcon className={classes.icon} />
      </div>
    </div>
  );
});
