import React, { useState, useEffect } from 'react';
import {
    Text,
    Button,
    Image,
    View
} from 'react-native';
import { useAuth } from '../utils/useauth';

const Connect = () => {
    const auth = useAuth();

    return (
        <View style={{ backgroundColor: 'rgba(255,70,30,1)', flex: 1 }}>
            <Image source={require("../assets/reddit-logo-16.png")} style={{ height: 200, width: 200, alignSelf: 'center' }} />
            <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center', fontFamily: 'Neo Sans' }}>Gayguette</Text>
            <Button title="Connect to reddit account" onPress={() => { auth.Authenticate() }}></Button>
        </View>)
}

export default Connect;