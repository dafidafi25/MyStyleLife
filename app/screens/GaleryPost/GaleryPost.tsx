import {Spacer} from '@components/atoms';
import NavigationHeader from '@components/molecules/NavigationHeader';
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ThemeImages} from '@assets/images';
import SelectImageIcon from '@assets/icons/SelectImageIcon';
import {colors} from '@themes/colors';
import CameraImageIcon from '@assets/icons/CameraImageIcon';
import TextTIcon from '@assets/icons/TextTIcon';
// import RNFS
import * as RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

interface IGaleryPostProps {}

export const GaleryPost: React.FC<IGaleryPostProps> = () => {
  // create function to get images uri from gallery
  const getImages = async () => {
    RNFetchBlob.fs
      .ls('/storage/emulated/0/DCIM/Camera/Raw')
      .then(files => {
        console.log(files);
      })
      .catch(error => console.log(error));
    RNFS.readDir('/storage/emulated/0/DCIM/Camera').then(async result => {
      for (const file of result) {
        // console.log(file.path);
        // console.log(await RNFS.stat(file.path));
        // if (file.isDirectory()) continue;
        // console.log('\n\n GALERY \n\n');
        // console.log('GOT FILE', file);
        // // get the file name
        // console.log('filename', file.name);
        // // get the file path
        // console.log('path', file.path);
        // console.log('size', file.size);
        // console.log('isFile', file.isFile());
        // console.log('isDirectory', file.isDirectory());
      }
    });

    return [];
  };
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
        <TouchableOpacity
          onPress={async () => {
            const test = await getImages();
            console.log(test);
          }}>
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
