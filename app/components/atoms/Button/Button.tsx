import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Button as BtnElements} from '@rneui/themed';
import {colors} from '@themes/colors';

interface IButtonProps {
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  title: string;
  outline?: boolean;
}

// Todo Theming Button and setup preset
export const Button: React.FC<IButtonProps> = ({
  fullWidth,
  variant = 'primary',
  title,
  outline,
}) => {
  let containerStyle: ViewStyle = {alignSelf: 'center'};

  let buttonStyle: ViewStyle = ButtonPreset[variant];

  let textStyle: TextStyle = TextPreset[variant];

  if (!fullWidth) containerStyle = {...containerStyle, width: '70%'};

  if (outline) {
    textStyle = {color: colors[variant]};
    containerStyle = {
      ...containerStyle,
      borderWidth: 2,
      borderColor: colors.pink2,
    };
    buttonStyle = {...buttonStyle, backgroundColor: colors.white};
  }

  containerStyle = {...containerStyle, ...BaseView};

  return (
    <BtnElements
      containerStyle={{...containerStyle}}
      title={title}
      buttonStyle={{
        ...buttonStyle,
        paddingVertical: 15,
      }}
      titleStyle={textStyle}
    />
  );
};

const BaseView: ViewStyle = {
  borderRadius: 5,
};

// TODO Suppose to Set up font familiy, weight, etc
const BaseText: TextStyle = {};

const ButtonPreset = StyleSheet.create({
  primary: {backgroundColor: colors.secondary},
  secondary: {backgroundColor: colors.primary},
});

const TextPreset = StyleSheet.create({
  primary: {color: colors.white},
  secondary: {color: colors.white},
});

export default Button;
