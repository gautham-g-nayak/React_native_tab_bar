import {StyleSheet, Image, View} from 'react-native';
import * as React from 'react';

type albumProps = {
  img: any;
};

const AlbumComponent = ({img}: albumProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#ffffff',
    resizeMode: 'cover',
  },
});

export default AlbumComponent;
