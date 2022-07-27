import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ContactScreen from './src/pages/ContactScreen';
import AlbumScreen from './src/pages/AlbumScreen';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Album" component={AlbumScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
