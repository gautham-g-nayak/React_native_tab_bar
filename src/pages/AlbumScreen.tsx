import {FlatList} from 'react-native';
import * as React from 'react';
import HorizontalDivider from '../components/Horizontal-divider';
import AlbumComponent from '../components/Album-component';
import {grass, sky, houses, hills} from '../../assets/images';

const DATA = [
  {
    img: grass,
  },
  {
    img: sky,
  },
  {
    img: houses,
  },
  {
    img: hills,
  },
];

function AlbumScreen({navigation}: any) {
  return (
    <FlatList
      data={[...DATA, ...DATA, ...DATA, ...DATA, ...DATA]}
      renderItem={({item}) => {
        return AlbumComponent(item, navigation);
      }}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={HorizontalDivider}
    />
  );
}

export default AlbumScreen;
