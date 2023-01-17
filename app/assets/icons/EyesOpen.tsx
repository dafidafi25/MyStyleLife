import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function EyeOpen({width = 24, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={24 / 24}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 24 24">
          <Path
            d="M12 9a3 3 0 110 6 3 3 0 010-6zm0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5zM3.18 12a9.821 9.821 0 0017.64 0 9.821 9.821 0 00-17.64 0z"
            fill="#343A40"
            fill-opacity="0.4"
          />
        </Svg>
      }
    />
  );
}

export default EyeOpen;
