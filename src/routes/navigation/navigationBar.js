import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Profile from '../screens/Profile';
import Connect from '../screens/Connection';
import Search from '../screens/Search';
import {useAuth} from './utils/useauth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';
import list from '../screens/list';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarStyle: {
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          height: 60,
          backgroundColor: 'rgba(000, 000, 000, 0.95)',
          paddingBottom: 10,
          position: 'absolute',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/home.png')}
              />
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={'Discover'}
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/search.png')}
              />
            );
          },
        }}></Tab.Screen>
      {auth.token != null ? (
        <>
          <Tab.Screen
            name={'Profile'}
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{width: size, height: size}}
                    source={require('../assets/profile.png')}
                  />
                );
              },
            }}></Tab.Screen>
        </>
      ) : (
        <Tab.Screen
          name={'Profile'}
          component={Connect}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/profile.png')}
                />
              );
            },
          }}
        />
      )}
    </Tab.Navigator>
  );
};
