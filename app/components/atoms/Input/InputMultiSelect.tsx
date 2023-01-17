import {Magnifier} from '@assets/icons';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import InterestChip from '../InterestChip';
import {Spacer} from '../Spacer';
import Text from '../Text/Text';
import {Overlay} from '@rneui/themed';
import InputSelectBox from './InputSelectBox';
import InputCheckBox from './InputCheckBox';

interface IInputMultiSelectProps {
  label: string;
}

export const InputMultiSelect: React.FC<IInputMultiSelectProps> = ({label}) => {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Pressable
        style={styles.container}
        onPress={() => {
          setIsOverlayOpen(oldVal => !oldVal);
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Spacer width={16} />
          <Text textType="label">{label}</Text>

          <View
            style={{
              flexGrow: 1,
              alignItems: 'flex-end',
              paddingRight: 13,
            }}>
            <Magnifier color={colors.Gray} width={20} />
          </View>
        </View>
      </Pressable>
      <Spacer height={8} />
      <View
        style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <InterestChip>Menopause</InterestChip>
        <Spacer width={10} />
        <InterestChip>Pre-menopause</InterestChip>
        <Spacer width={10} />
      </View>
      <Overlay
        overlayStyle={{marginHorizontal: 16}}
        isVisible={isOverlayOpen}
        onBackdropPress={() => setIsOverlayOpen(oldVal => !oldVal)}>
        <View style={{marginHorizontal: 16}}>
          <Text
            textType="bold"
            fontColors={colors.black}
            fontSize={18}
            fontLineHeight={22}
            style={{textAlign: 'center'}}>
            Select Your Interest
          </Text>
          <Spacer height={12} />
          <InputCheckBox label="Menopause" />
          <InputCheckBox label="Pre-Menopause" />
        </View>
      </Overlay>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default InputMultiSelect;
