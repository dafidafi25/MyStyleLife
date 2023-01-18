import {Spacer} from '@components/atoms';
import NavigationHeader from '@components/molecules/NavigationHeader';
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ThemeImages} from '@assets/images';
import SelectImageIcon from '@assets/icons/SelectImageIcon';
import {colors} from '@themes/colors';
import CameraImageIcon from '@assets/icons/CameraImageIcon';
import TextTIcon from '@assets/icons/TextTIcon';

interface IGaleryPostProps {}

export const GaleryPost: React.FC<IGaleryPostProps> = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader title="New Post" />
      <Spacer height={25} />
      <Image
        source={ThemeImages.DummyPostImage}
        style={{width: '100%'}}
        resizeMode="contain"
      />
      <Spacer height={14} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Spacer width={17.5} />
        <SelectImageIcon color={colors.secondary} />
        <Spacer width={26} />
        <TouchableOpacity>
          <CameraImageIcon color={colors.black} />
        </TouchableOpacity>
        <Spacer width={30.5} />
        <TouchableOpacity>
          <TextTIcon color={colors.black} />
        </TouchableOpacity>
      </View>
      <Spacer height={21} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GaleryPost;
