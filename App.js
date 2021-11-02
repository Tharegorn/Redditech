/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProvideAuth} from './src/routes/utils/useauth';
import list from './src/routes/screens/list';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from './src/routes/screens/HomePage';
import Search from './src/routes/screens/Search';
import Connect from './src/routes/screens/Connection';
import Profile from './src/routes/screens/Profile';
import {useAuth} from './src/routes/utils/useauth';
import Home from './src/routes/Home';

const Tab = createBottomTabNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useAuth();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ProvideAuth>
      <Home />
    </ProvideAuth>
  );
}

function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
