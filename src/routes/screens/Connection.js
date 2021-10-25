import React, { useState, useEffect } from 'react';
import {
    Text,
    Button,
    Image,
} from 'react-native';
import { useAuth } from '../utils/useauth';

const Connect = () => {
    const auth = useAuth();

    return (<Button title="Connect to reddit account" onPress={() => { auth.Authenticate() }}></Button>)
}

export default Connect;