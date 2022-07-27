import {Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

const DetailsPage = ({route}: any) => {
  const {name = '', phNo, img = ''} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      {name && (
        <>
          <View style={styles.profile}>
            <Text style={styles.profileText}>{name.charAt(0)}</Text>
          </View>

          <Text style={styles.HeadingText}>{name}</Text>
          <Text style={styles.SubText}>{phNo}</Text>
        </>
      )}
      {img && <Image style={styles.image} source={img} />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#ffffff',
    resizeMode: 'cover',
  },
  profile: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 25,
  },
  HeadingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  SubText: {
    color: 'grey',
    fontSize: 15,
  },
});

export default DetailsPage;
