import {FlatList} from 'react-native';
import * as React from 'react';
import contactComponent from '../components/Contact-component';
import HorizontalDivider from '../components/Horizontal-divider';

const DATA = [
  {
    name: 'Gautham Nayak',
    phNo: 7895238650,
  },
  {
    name: 'Bhargav',
    phNo: 9856482604,
  },
  {
    name: 'Krishna',
    phNo: 8895485263,
  },
];

function ContactScreen() {
  return (
    <FlatList
      data={[...DATA, ...DATA, ...DATA, ...DATA, ...DATA]}
      renderItem={({item}) => {
        return contactComponent(item);
      }}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={HorizontalDivider}
    />
  );
}

export default ContactScreen;
