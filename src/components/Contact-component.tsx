import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

type contactProps = {
  name: string;
  phNo: number;
};

const ContactComponent = ({name, phNo}: contactProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileText}>{name.charAt(0)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.HeadingText}>{name}</Text>
        <Text style={styles.SubText}>{phNo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  profile: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 25,
  },
  textContainer: {
    padding: 10,
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

export default ContactComponent;
