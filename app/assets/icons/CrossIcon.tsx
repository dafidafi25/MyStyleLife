import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function CrossIcon({color, width = 14, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={14 / 13}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 14 13">
          <Path
            d="M11.5146 0.298306L6.87424 4.93869L2.23385 0.298306C2.11784 0.182296 1.88582 0.182296 1.76981 0.298306L0.841732 1.22638C0.69672 1.3714 0.725722 1.57441 0.841732 1.69042L5.48212 6.33081L0.841732 10.9712C0.69672 11.1162 0.725722 11.3192 0.841732 11.4352L1.76981 12.3633C1.91482 12.5083 2.08884 12.5083 2.23385 12.3633L6.87424 7.72293L11.5146 12.3633C11.6596 12.5083 11.8337 12.5083 11.9787 12.3633L12.9067 11.4352C13.0228 11.3192 13.0518 11.1162 12.9067 10.9712L8.26635 6.33081L12.9067 1.69042C13.0228 1.57441 13.0518 1.3714 12.9067 1.22638L11.9787 0.298306C11.8627 0.182296 11.6306 0.182296 11.5146 0.298306Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default CrossIcon;
