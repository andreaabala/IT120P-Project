import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconOutlinedActionMainSearch } from '../IconOutlinedActionMainSearch/IconOutlinedActionMainSearch.js';
import classes from './TextfieldSearchDefault.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 18:44 */
export const TextfieldSearchDefault: FC<Props> = memo(function TextfieldSearchDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.box}></div>
      <IconOutlinedActionMainSearch
        className={classes.iconOutlinedActionMainSearch}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
          vector2: <VectorIcon2 className={classes.icon2} />,
        }}
      />
      <div className={classes.search}>Search</div>
    </div>
  );
});
