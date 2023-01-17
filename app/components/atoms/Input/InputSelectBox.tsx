import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {View, StyleSheet, ViewStyle, Pressable} from 'react-native';
import {Spacer} from '../Spacer';
import Text from '../Text/Text';

export type InputSelectOptions = {
  name: string | number;
  value: string | number;
}[];

interface IInputSelectBoxProps {
  orientation?: 'vertical' | 'horizontal';
  options: InputSelectOptions;
  label?: string;
  defaultValue?: string | number;
}

// Todo Create Select Box Input
export const InputSelectBox: React.FC<IInputSelectBoxProps> = ({
  orientation = 'horizontal',
  label,
  options,
  defaultValue,
}) => {
  const [uiValue, setUiValue] = useState<string | number>(defaultValue);

  return (
    <View style={styles.container}>
      <Text textType="label" fontSize={14}>
        {label}
      </Text>
      <Spacer height={8} />
      <View
        style={{flexDirection: orientation === 'vertical' ? 'column' : 'row'}}>
        {options?.map(item => (
          <React.Fragment key={item.value}>
            <Pressable
              style={[BaseView, uiValue === item.value ? Selected : null]}
              onPress={() => setUiValue(item.value)}>
              <Text textType="label">{item.name}</Text>
            </Pressable>

            {orientation === 'horizontal' ? (
              <Spacer width={8} />
            ) : (
              <Spacer height={16} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const BaseView: ViewStyle = {
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderWidth: 1,
  borderRadius: 5,
};

const Selected: ViewStyle = {
  backgroundColor: colors.primary,
};

export default InputSelectBox;
