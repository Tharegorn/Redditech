
import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
} from 'react-native';
import { useAuth } from '../utils/useauth';
import { Switch } from 'react-native-elements'
import axios from 'axios';

const Settings = () => {
    const auth = useAuth();
    useEffect(() => {
        auth.Prefs()
    }, [])
    return (
        <>
            <Text>Change Profile settings</Text>
            <Text>Accept pms from : {auth.prefs.pms}</Text>
            <Text>Show presence : <Switch value={auth.prefs.presence} /></Text>
            <Text>Over 18: <Switch value={auth.prefs.over_18} onChange={() => {
                console.log(auth.token)
                if (auth.prefs.over_18) {
                    const options = {
                        method: 'PATCH',
                        url: 'https://oauth.reddit.com/api/v1/me/prefs',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: "Bearer " + auth.token,
                        }, data: {
                            over_18: false
                        }
                    };
                    axios.request(options).then((res) => {
                        console.log(response)
                    }).catch((a) => {
                        console.error(a)
                    })
                } else {
                    const options = {
                        method: 'PATCH',
                        url: 'https://oauth.reddit.com/api/v1/me/prefs',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: "Bearer " + auth.token,
                        }, data: {
                            over_18: true,
                        }
                    };
                    axios.request(options)
                }
                auth.Prefs()
            }} /></Text>
            <Text>label nsfw: <Switch value={auth.prefs.label_nsfw} /></Text>
            <Text>Lang: {auth.prefs.lang}</Text>
            <Text>Description: </Text>
        </>
    )
}

export default Settings;