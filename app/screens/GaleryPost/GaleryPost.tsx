import {Spacer} from '@components/atoms';
import NavigationHeader from '@components/molecules/NavigationHeader';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import SelectImageIcon from '@assets/icons/SelectImageIcon';
import {colors} from '@themes/colors';
import CameraImageIcon from '@assets/icons/CameraImageIcon';
import TextTIcon from '@assets/icons/TextTIcon';
import {PermissionsAndroid} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';

interface IGaleryPostProps {}

export const GaleryPost: React.FC<IGaleryPostProps> = () => {
  const [imageList, setImageList] = React.useState<Array<PhotoIdentifier>>([]);
  const [pageCursor, setPageCursor] = React.useState<string>('');
  const [selectedImage, setSelectedImage] = React.useState<string>('');

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'My S Life APP Media Permission',
            message:
              'Cool Photo App needs access to your Media ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getImages();
          console.log('You can access camera');
        } else {
          console.log('Media permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  }, []);

  const getImages = async (nextCursor?: string) => {
    try {
      const images = await CameraRoll.getPhotos({
        first: 50,
        after: nextCursor ? nextCursor : '',
        assetType: 'Photos',
        include: ['filename', 'imageSize'],
      });
      setPageCursor(images.page_info?.end_cursor);
      setImageList(oldPage => [...oldPage, ...images.edges]);
      if (selectedImage === '') {
        setSelectedImage(images.edges[0].node.image.uri);
      }
    } catch (err) {
      console.log(err);
    }

    return [];
  };

  return (
    <View style={styles.container}>
      <NavigationHeader title="New Post" />
      <Spacer height={25} />
      <Image
        source={{uri: selectedImage}}
        style={{width: '100%', height: 250}}
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
      <FlatGrid
        onEndReached={() => getImages(pageCursor)}
        itemDimension={82}
        data={imageList}
        renderItem={({item}) => (
          <Pressable
            key={item?.node?.image?.uri}
            style={styles.galery}
            onPress={() => setSelectedImage(item.node.image.uri)}>
            <Image
              source={{uri: item.node.image.uri}}
              key={item.node.image.uri}
              style={{
                width: 82,
                height: 82,
              }}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  galery: {
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: 82,
    height: 82,
  },
});

export default GaleryPost;
