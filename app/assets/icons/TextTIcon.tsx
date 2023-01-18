import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function TextTIcon({color, width = 12, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={12 / 14}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 12 14">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 3V13C7.5 13.5523 7.05228 14 6.5 14H5.5C4.94772 14 4.5 13.5523 4.5 13V3H1C0.447715 3 0 2.55228 0 2V1C0 0.447715 0.447715 0 1 0L11 0C11.5523 0 12 0.447715 12 1V2C12 2.55228 11.5523 3 11 3H7.5Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default TextTIcon;
