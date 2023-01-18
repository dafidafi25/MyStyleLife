import {SvgWrapper} from '@components/atoms';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function AddIcon({color, width = 51, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={51 / 51}
      width={width}
      height={height}
      children={
        <Svg width="100%" fill="none" height="100%" viewBox="0 0 51 51">
          <Path
            d="M38.2279 38.1838C28.4949 47.9168 22.5051 47.9168 12.7721 38.1838C3.03901 28.4507 3.03901 22.461 12.7721 12.7279C22.5051 2.99485 28.4949 2.99485 38.2279 12.7279C47.961 22.461 47.961 28.4507 38.2279 38.1838Z"
            fill={color}
          />
          <Path
            d="M33.4209 24.3462H26.8584V17.7837C26.8584 17.6196 26.6943 17.4556 26.5303 17.4556H25.2178C25.0127 17.4556 24.8896 17.6196 24.8896 17.7837V24.3462H18.3271C18.1221 24.3462 17.999 24.5103 17.999 24.6743V25.9868C17.999 26.1919 18.1221 26.3149 18.3271 26.3149H24.8896V32.8774C24.8896 33.0825 25.0127 33.2056 25.2178 33.2056H26.5303C26.6943 33.2056 26.8584 33.0825 26.8584 32.8774V26.3149H33.4209C33.585 26.3149 33.749 26.1919 33.749 25.9868V24.6743C33.749 24.5103 33.585 24.3462 33.4209 24.3462Z"
            fill="white"
          />
        </Svg>
      }
    />
  );
}

export default AddIcon;
