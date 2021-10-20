
import React, { useState, useEffect } from 'react';
import {
    Text,
    Button,
    Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage'
import { useAuth } from './utils/useauth';
const Tab = createBottomTabNavigator();

const Connect = () => {
    const auth = useAuth();

    return (<Button title="Connect to reddit account" onPress={() => { auth.Authenticate() }}></Button>)
}
const Profile = () => {
    const auth = useAuth();
    useEffect(() => {
        auth.Profile()
    }, [])
    return (
        <>
            <Text>Name : {auth.profile.name}</Text>
            <Text>Desc : {auth.profile.desc}</Text>
            <Text>karma : {auth.profile.karma}</Text>
            <Text>Coins : {auth.profile.coins}</Text>
            <Text>Prefix : {auth.profile.prefix}</Text>
            <Text>url : {auth.profile.url}</Text>
            <Image source={{ uri: "https://styles.redditmedia.com/t5_zu6i3/styles/profileIcon_di7saosll7u71.jpg" }} />
        </>
    )
}
const HomeScreen = ({ state, descriptor, navigation }) => {
    const auth = useAuth();

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false, }}
                />
                {auth.token != null ? <Tab.Screen name="Profile" component={Profile} /> :
                    <Tab.Screen name="Connect" component={Connect} />}
            </Tab.Navigator>
        </>
    )
};

export default HomeScreen;