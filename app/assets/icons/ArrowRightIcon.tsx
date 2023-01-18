import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function ArrowRightIcon({color, width = 18, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={18 / 12}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 18 12">
          <Path
            d="M0 5H14.17L10.59 1.41L12 0L18 6L12 12L10.59 10.59L14.17 7H0V5Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default ArrowRightIcon;
