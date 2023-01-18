import {colors} from '@themes/colors';
import React from 'react';
import {Pressable, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Spacer} from '../Spacer';
import Text from '../Text/Text';

interface IInputCheckBoxProps {
  value?: boolean;
  onChange?: (val: boolean) => void;
  label: string;
}

export const InputCheckBox: React.FC<IInputCheckBoxProps> = ({
  value = false,
  onChange,
  label,
}) => {
  const [checked, setChecked] = React.useState(value);

  return (
    <Pressable
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => {
        setChecked(oldVal => !oldVal);
        onChange && onChange(!checked);
      }}>
      <Checkbox
        color={colors.primary}
        status={checked ? 'checked' : 'unchecked'}
      />

      <Spacer />
      <View style={{flexDirection: 'row', maxWidth: '95%'}}>
        <Text textType="label" style={{}}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default InputCheckBox;
