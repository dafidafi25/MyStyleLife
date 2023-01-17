import PriceTagIcon from '@assets/icons/PriceTagIcon';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spacer} from './Spacer';
import Text from './Text/Text';

interface IInterestChipProps {
  children: React.ReactNode;
}

export const InterestChip: React.FC<IInterestChipProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <PriceTagIcon color={colors.Gray} />
      <Spacer width={6} />
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginBottom: 10,
  },
});

export default InterestChip;
