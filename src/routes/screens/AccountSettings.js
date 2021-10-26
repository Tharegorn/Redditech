
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
    // useEffect(() => {
    auth.Prefs()
    // }, [])
    return (
        <>
            <Text style={{ color: 'black' }}>Change Profile settings</Text>
            <Text style={{ color: 'black' }}>Accept pms from : {auth.prefs.pms}</Text>
            <Text style={{ color: 'black' }}>Show presence : <Switch value={auth.prefs.presence} /></Text>
            <Text style={{ color: 'black' }}>Over 18: <Switch value={auth.prefs.over_18} onChange={() => {
                console.log(auth.token)
                if (auth.prefs.over_18) {
                    const options = {
                        method: 'PATCH',
                        url: 'https://oauth.reddit.com/api/v1/me/prefs',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': "Bearer " + auth.token,
                        }, body: new URLSearchParams("?raw_json=1&over_18=false")
                    };
                    axios.request(options).then((res) => {
                        console.log(res)
                    }).catch((a) => {
                        console.error(a);
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
            <Text style={{ color: 'black' }}>label nsfw: <Switch value={auth.prefs.label_nsfw} /></Text>
            <Text style={{ color: 'black' }}>Lang: {auth.prefs.lang}</Text>
            <Text style={{ color: 'black' }}>Description: </Text>
        </>
    )
}

export default Settings;