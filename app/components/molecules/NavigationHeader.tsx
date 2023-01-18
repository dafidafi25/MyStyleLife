import ArrowRightIcon from '@assets/icons/ArrowRightIcon';
import CrossIcon from '@assets/icons/CrossIcon';
import {Spacer, Text} from '@components/atoms';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@themes/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface INavigationHeaderProps {
  title: string;
}

export const NavigationHeader: React.FC<INavigationHeaderProps> = ({title}) => {
  const navigation = useBaseNavigation();

  return (
    <>
      <Spacer height={10} />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CrossIcon color={colors.black} />
        </TouchableOpacity>
        <Text textType="header">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color={colors.black} />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default NavigationHeader;
