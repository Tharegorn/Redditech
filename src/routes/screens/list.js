
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
import { unsubscribe } from '../utils/PostReddit'

const list = () => {
    const auth = useAuth();
    const [subs, setSubs] = useState(null)
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
    return (
        <>
            <ScrollView>
                {subs ? subs.map((item, index) => (<Card key={index}>
                    {item.data.community_icon ? <Card.Image source={{ uri: item.data.community_icon.split('?')[0] }} style={{ width: 50, height: 50 }} /> : <></>}
                    <Card.Title style={{ color: 'black' }}>{item.data.display_name}</Card.Title>
                    {item.data.banner_background_image ? <Card.Image source={{ uri: item.data.banner_background_image.split('?')[0] }} style={{ width: 500 }} /> : <></>}
                    <Text style={{ color: 'black' }}>Subscribers : {item.data.subscribers}</Text>
                    <Text style={{ color: 'black' }}>{item.data.display_name_prefixed}</Text>
                    <Text style={{ color: 'black' }}>{item.data.description}</Text>
                    <Button title="unsubscribe" onPress={() => { console.log(item.data); unsubscribe(item.data.display_name, auth.token) }}></Button>
                </Card>)) : <Text style={{ color: 'black' }}>no</Text>}
            </ScrollView>
        </>
    )
}

export default list;