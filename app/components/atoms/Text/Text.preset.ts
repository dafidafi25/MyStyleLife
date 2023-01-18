import {colors} from '@themes/colors';
import {type, weight} from '@themes/font';
import {TextStyle} from 'react-native';

export type TextType = 'header' | 'normal' | 'bold' | 'label';

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
  fontWeight: weight.bold,
  fontFamily: type.SpartanRegular,
  fontSize: 18,
  lineHeight: 20,
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {height: 4, width: -1},
  color: '#333333',
};

const label: TextStyle = {
  fontWeight: weight.normal,
  fontFamily: type.SpartanRegular,
  fontSize: 14,
  lineHeight: 18,
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {height: 4, width: -1},
  color: colors.black,
};

export const Preset: {[id: string]: TextStyle} = {
  normal: normal,
  bold: bold,
  header: header,
  label: label,
};
