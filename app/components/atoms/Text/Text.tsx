import React from 'react';
import {Text as DefaultText, TextStyle} from 'react-native';
import {BaseProps} from './Text.Props';
import {Preset, weightPreset} from './Text.preset';

export const Text: React.FC<BaseProps> = ({
  children,
  fontSize,
  fontWeight,
  textType = 'normal',
  fontColors,
  style,
  debug,
  numberOfLines,
  ellipsizeMode,
  fontLineHeight,
}) => {
  let fontStyle: TextStyle = {};

  if (textType) fontStyle = {...fontStyle, ...Preset[textType]};
  if (fontSize) fontStyle = {...fontStyle, fontSize: Number(fontSize)};
  if (fontWeight) fontStyle = {...fontStyle, ...weightPreset[fontWeight]};
  if (fontColors) fontStyle = {...fontStyle, color: fontColors};
  if (fontLineHeight) fontStyle = {...fontStyle, lineHeight: fontLineHeight};

  // Most priority is style props
  fontStyle = {...fontStyle, ...style};
  if (debug) console.log(fontStyle);
  return (
    <DefaultText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={fontStyle}>
      {children}
    </DefaultText>
  );
};

export default Text;
