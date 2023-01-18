import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function HomeIcon({color, width = 20, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={20 / 21}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 20 21">
          <Path
            d="M9.70059 0.855957L0.100586 8.06593L2.50059 20.056H7.2506V12.181H12.1506V20.056H16.9006L19.3006 8.06593L9.70059 0.855957Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default HomeIcon;
