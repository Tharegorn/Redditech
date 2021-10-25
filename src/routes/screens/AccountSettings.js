
import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
} from 'react-native';
import { useAuth } from '../utils/useauth';
import {Switch} from 'react-native-elements'

const Settings = () => {
    const auth = useAuth();
    useEffect(() => {
        auth.Prefs()
    }, [])
    return (
        <>
            <Text>Change Profile settings</Text>
            <Text>Accept pms from : {auth.prefs.pms}</Text>
            <Text>Show presence : <Switch value={auth.prefs.presence}/></Text>
            <Text>Over 18: <Switch value={auth.prefs.over_18}/></Text>
            <Text>label nsfw: <Switch value={auth.prefs.label_nsfw}/></Text>
            <Text>Lang: {auth.prefs.lang}</Text>
            <Text>Description: </Text>
        </>
    )
}

export default Settings;