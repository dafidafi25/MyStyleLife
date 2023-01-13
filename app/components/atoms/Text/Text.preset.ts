import {type, weight} from '@themes/font';
import {TextStyle} from 'react-native';

export type TelkomTextType = 'header' | 'normal' | 'bold';

export const weightPreset: {[id: string]: TextStyle} = {
  normal: {fontWeight: weight.normal},
  semiBold: {fontWeight: weight.semibold},
  bold: {fontWeight: weight.bold},
  extraBold: {fontWeight: weight.extraBold},
};

const normal: TextStyle = {
  fontWeight: weight.normal,
  fontFamily: type.TTCommonsRegular,
  fontSize: 14,
  lineHeight: 16,
};

const bold: TextStyle = {
  fontWeight: weight.extraBold,
  fontFamily: type.SpartanRegular,
  fontSize: 14,
  lineHeight: 16,
};

const header: TextStyle = {
  fontWeight: weight.extraBold,
  fontFamily: type.TTCommonsBold,
  fontSize: 16,
  lineHeight: 16,
};

export const Preset: {[id: string]: TextStyle} = {
  normal: normal,
  bold: bold,
  header: header,
};
