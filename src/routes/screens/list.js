
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import { useAuth } from '../utils/useauth';
import { Card } from 'react-native-elements'
import axios from 'axios';

const list = () => {
    const auth = useAuth();
    const [subs, setSubs] = useState(null)
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://oauth.reddit.com/subreddits/mine',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: "Bearer " + auth.token,
            },
        };
        axios.request(options).then((res) => {
            setSubs(res.data.data.children)
        }).catch((e) => {
            console.error(e)
        })
    }, [])
    return (
        <>
            <ScrollView>
                {subs ? subs.map((item, index) => (<Card key={index}>
                    <Card.Title style={{ color: 'black' }}>{item.data.display_name}</Card.Title>
                    <Text style={{ color: 'black' }}>Subscribers : {item.data.subscribers}</Text>
                    <Text style={{ color: 'black' }}>{item.data.display_name_prefixed}</Text>
                    <Text style={{ color: 'black' }}>{item.data.description}</Text>
                </Card>)) : <Text style={{ color: 'black' }}>no</Text>}
            </ScrollView>
        </>
    )
}

export default list;