import * as React from 'react';
import {View} from 'react-native';

export interface SpacerProps {
  width?: number;
  height?: number;
}

export function Spacer(props: SpacerProps) {
  const {width, height} = props;
  return <View style={{width: width, height: height}} />;
}
