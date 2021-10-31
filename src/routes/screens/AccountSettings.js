
import React, {useEffect } from 'react';
import {
    Text,
    Image,
} from 'react-native';
import { useAuth } from '../utils/useauth';
import { Switch } from 'react-native-elements'

const Settings = () => {
    const auth = useAuth();
    function modify(data) {
        fetch('https://oauth.reddit.com/api/v1/me/prefs', {
            method: 'PATCH',
            headers: {
                Authorization: "bearer " + auth.token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data)
        }).then(() => {
            auth.Prefs()
        })
    }
    useEffect(() => {
        auth.Prefs()
    }, [])
    return (
        <>
            <Text style={{ color: 'black' }}>Change Profile settings</Text>
            <Text style={{ color: 'black' }}>Show presence : <Switch value={auth.prefs.presence} onValueChange={(e) => {
                modify({'show_presence': e})
            }} /></Text>
            <Text style={{ color: 'black' }}>Over 18: <Switch value={auth.prefs.over_18} onValueChange={(e) => {
                modify({'over_18': e})
            }} /></Text>
            <Text style={{ color: 'black' }}>AutoPlay: <Switch value={auth.prefs.autoplay} onValueChange={(e) => {
                modify({'video_autoplay': e})
                console.log(auth.prefs)
            }} /></Text>
            <Text style={{ color: 'black' }}>Country Code: {auth.prefs.lang}</Text>
            <Text style={{ color: 'black' }}>Description: </Text>
        </>
    )
}

export default Settings;