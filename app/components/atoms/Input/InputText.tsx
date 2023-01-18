import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface IInputTextProps {
  label?: string;
  placeholder?: string;
  mode?: 'flat' | 'outlined';
  obscure?: boolean;
}

export const InputText: React.FC<IInputTextProps> = ({
  placeholder,
  label,
  mode = 'outlined',
  obscure = false,
}) => {
  const [obscureProps, setObscureProps] = useState(obscure);

  return (
    <View style={{backgroundColor: colors.white}}>
      <TextInput
        label={label}
        placeholder={placeholder}
        mode={mode}
        outlineColor={colors.Gray}
        activeOutlineColor={colors.Gray}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry={obscureProps}
        right={
          obscure &&
          (obscureProps ? (
            <TextInput.Icon
              icon="eye-off"
              onPress={() => setObscureProps(oldVal => !oldVal)}
            />
          ) : (
            <TextInput.Icon
              icon="eye"
              onPress={() => setObscureProps(oldVal => !oldVal)}
            />
          ))
        }
      />
    </View>
  );
};

export default InputText;
