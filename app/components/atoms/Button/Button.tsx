import React from 'react';
import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Button as BtnElements} from '@rneui/themed';
import {ButtonColors, colors} from '@themes/colors';

interface IButtonProps {
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  title: string;
  outline?: boolean;
  onPress?: () => void;
}

// Todo Theming Button and setup preset
export const Button: React.FC<IButtonProps> = ({
  fullWidth,
  variant = 'primary',
  title,
  outline,
  onPress,
}) => {
  let containerStyle: ViewStyle = {alignSelf: 'center'};

  let buttonStyle: ViewStyle = ButtonPreset[variant];

  let textStyle: TextStyle = TextPreset[variant];

  if (fullWidth) containerStyle = {...containerStyle, width: '100%'};

  if (outline) {
    textStyle = {color: ButtonColors[variant]};
    containerStyle = {
      ...containerStyle,
      borderWidth: 2,
      borderColor: ButtonColors[variant],
    };
    buttonStyle = {...buttonStyle, backgroundColor: colors.white};
  }

  containerStyle = {...containerStyle, ...BaseView};

  return (
    <BtnElements
      onPress={onPress}
      containerStyle={{...containerStyle}}
      title={title}
      buttonStyle={{
        ...buttonStyle,
        paddingVertical: 10,
      }}
      titleStyle={textStyle}
    />
  );
};

const BaseView: ViewStyle = {
  borderRadius: 5,
  width: '70%',
};

// TODO Suppose to Set up font familiy, weight, etc
const BaseText: TextStyle = {};

const ButtonPreset = StyleSheet.create({
  primary: {backgroundColor: colors.secondary},
  secondary: {backgroundColor: colors.primary},
});

const TextPreset = StyleSheet.create({
  primary: {color: colors.white},
  secondary: {color: colors.black},
});

export default Button;
