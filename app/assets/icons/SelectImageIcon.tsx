import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function SelectImageIcon({color, width = 22, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={22 / 22}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 22 22">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 0.5V3.5H21.5V5.5H18.5V8.49C18.5 8.49 16.51 8.5 16.5 8.49V5.5H13.5C13.5 5.5 13.51 3.51 13.5 3.5H16.5V0.5H18.5ZM16.5 19.5H2.5V5.5H11.5V3.5H2.5C1.4 3.5 0.5 4.4 0.5 5.5V19.5C0.5 20.6 1.4 21.5 2.5 21.5H16.5C17.6 21.5 18.5 20.6 18.5 19.5V10.5H16.5V19.5ZM8.71 16.33L6.75 13.97L4 17.5H15L11.46 12.79L8.71 16.33Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default SelectImageIcon;
