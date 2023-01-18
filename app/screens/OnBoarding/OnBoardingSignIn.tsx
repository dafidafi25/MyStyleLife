import {Spacer, Text} from '@components/atoms';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@themes/colors';
import {type} from '@themes/font';
import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';

interface IOnBoardingSignInProps {}

export const OnBoardingSignIn: React.FC<IOnBoardingSignInProps> = () => {
  const navigation = useBaseNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 32,
        }}>
        <View>
          <Text
            style={{textAlign: 'center', fontFamily: type.SpartanRegular}}
            fontSize={30}
            fontColors={colors.black}
            fontWeight={'extraBold'}
            fontLineHeight={50}>
            WELCOME TO
          </Text>
          <Text
            style={{textAlign: 'center', fontFamily: type.SpartanRegular}}
            fontSize={30}
            fontColors={colors.secondary}
            fontWeight={'extraBold'}
            fontLineHeight={50}>
            MY S LIFE
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            textType="label"
            style={{textAlign: 'center', fontFamily: type.SpartanRegular}}
            fontSize={16}
            fontLineHeight={24}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </Text>
        </View>
        <Spacer />
      </View>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Home')}>
        <Text
          fontSize={20}
          fontLineHeight={22}
          fontColors={colors.black}
          style={{fontFamily: type.SpartanRegular}}>
          Next
        </Text>
        <Spacer height={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink1,
    flex: 1,
  },
});

export default OnBoardingSignIn;
