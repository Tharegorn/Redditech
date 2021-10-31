import React, { useState, useEffect, StyleSheet } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import Profile from './screens/Profile';
import Connect from './screens/Connection';
import Search from './screens/Search';
import Settings from './screens/AccountSettings';
import list from './screens/list';
import { useAuth } from './utils/useauth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
  const auth = useAuth();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'lightgray',
          tabBarActiveBackgroundColor: '#000',
          tabBarInactiveBackgroundColor: '#000',
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarLabel: '',
            // tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="search" color={color} size={size} />
            // ),
          }}
        />
        {auth.token != null ? (
          <>
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: '',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarLabel: '',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-settings-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Another"
              component={list}
              options={{
                tabBarLabel: '',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-settings-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        ) : (
          <Tab.Screen
            name="Connect"
            component={Connect}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-plus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </>
  );
};

export default Home;
