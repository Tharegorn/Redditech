
import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    Button,
} from 'react-native';
import { useAuth } from '../utils/useauth';
import { Switch } from 'react-native-elements'
import axios from 'axios';

const list = () => {
    const auth = useAuth();
    function test() {
        const options = {
            method: 'GET',
            url: 'https://oauth.reddit.com/subreddits/mine',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: "Bearer " + auth.token,
            },
        };
        axios.request(options).then((res) => {
            console.log(res.data.data.children[1])
        }).catch((e) => {
            console.error(e)
        })
    }
    return (
        <>
            <Text style={{ color: 'black' }}>Description: </Text>
            <Button title="salut" onPress={(e) => {test()}}></Button>
        </>
    )
}

export default list;