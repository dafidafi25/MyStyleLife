import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function CameraImageIcon({color, width = 24, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={24 / 22}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 24 22">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 5.5H5.5V8.5H3.5V5.5H0.5V3.5H3.5V0.5H5.5V3.5H8.5V5.5ZM18.33 5.5H21.5C22.6 5.5 23.5 6.4 23.5 7.5V19.5C23.5 20.6 22.6 21.5 21.5 21.5H5.5C4.4 21.5 3.5 20.6 3.5 19.5V10.5H5.5V19.5H21.5V7.5H17.45L15.62 5.5H10.5V3.5H16.5L18.33 5.5ZM13.5 18.5C10.74 18.5 8.5 16.26 8.5 13.5C8.5 10.74 10.74 8.5 13.5 8.5C16.26 8.5 18.5 10.74 18.5 13.5C18.5 16.26 16.26 18.5 13.5 18.5ZM13.5 10.5C15.15 10.5 16.5 11.85 16.5 13.5C16.5 15.15 15.15 16.5 13.5 16.5C11.85 16.5 10.5 15.15 10.5 13.5C10.5 11.85 11.85 10.5 13.5 10.5Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default CameraImageIcon;
