import {Spacer, Text} from '@components/atoms';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@themes/colors';
import {type} from '@themes/font';
import React, {useRef} from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-web-swiper';

interface IOnBoardingProps {}

export const OnBoarding: React.FC<IOnBoardingProps> = () => {
  const swiperRef = useRef(null);
  const navigation = useBaseNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
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
      <Swiper
        ref={swiperRef}
        controlsProps={{
          prevPos: false,
          nextPos: false,
          dotsWrapperStyle: {bottom: '200%'},
          dotActiveStyle: {backgroundColor: colors.primary},
          dotProps: {badgeStyle: {backgroundColor: colors.white}},
          dotsTouchable: true,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 32,
          }}>
          <OnBoardingContent />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 32,
          }}>
          <OnBoardingContent />
        </View>
      </Swiper>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <Spacer height={20} />
        <TouchableOpacity
          onPress={() => {
            const index = swiperRef.current.getActiveIndex();
            if (index === 0) swiperRef.current.goTo(1);
            else navigation.navigate('Home');
          }}>
          <Text
            fontSize={20}
            fontLineHeight={22}
            fontColors={colors.black}
            style={{fontFamily: type.SpartanRegular}}>
            Skip
          </Text>
        </TouchableOpacity>
        <Spacer height={30} />
      </View>
    </SafeAreaView>
  );
};

const OnBoardingContent = () => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink1,
    flex: 1,
  },
});

export default OnBoarding;
