import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function StarIcon({color, width = 21, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={21 / 20}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 21 20">
          <Path
            d="M11.4596 0.765507L14.112 6.12935C14.171 6.30619 14.3478 6.42407 14.5246 6.42407L20.419 7.30822C20.8905 7.36717 21.0673 7.9566 20.7137 8.25132L16.4108 12.4363C16.2929 12.5542 16.234 12.731 16.234 12.9078L17.236 18.8022C17.295 19.2737 16.8234 19.6274 16.4108 19.3916L11.1059 16.6213C10.9291 16.5623 10.7523 16.5623 10.5754 16.6213L5.27052 19.3916C4.85792 19.6274 4.38637 19.2737 4.44531 18.8022L5.44735 12.9078C5.50629 12.731 5.44735 12.5542 5.27052 12.4363L0.967653 8.25132C0.790823 7.89766 0.967653 7.36717 1.4392 7.30822L7.39248 6.42407C7.56931 6.42407 7.74614 6.30619 7.80508 6.12935L10.4575 0.765507C10.6344 0.352904 11.2238 0.352904 11.4596 0.765507Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default StarIcon;
