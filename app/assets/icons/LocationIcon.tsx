import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function LocationIcon({color, width = 18, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={18 / 21}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 18 21">
          <Path
            d="M8.2252 19.6269C8.61895 20.199 9.53769 20.199 9.93145 19.6269C16.5669 13.9329 17.5002 11.8897 17.5002 8.70214C17.5002 4.37039 13.7377 0.855957 9.1002 0.855957C4.41895 0.855957 0.700195 4.37039 0.700195 8.70214C0.700195 11.8897 1.63353 14.3688 8.2252 19.6269ZM9.1002 11.9714C7.13145 11.9714 5.6002 10.5411 5.6002 8.70214C5.6002 6.90406 7.13145 5.4329 9.1002 5.4329C11.0252 5.4329 12.6002 6.90406 12.6002 8.70214C12.6002 10.5411 11.0252 11.9714 9.1002 11.9714Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default LocationIcon;
