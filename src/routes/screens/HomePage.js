import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements'
import axios from 'axios'

const HomePage = (navigation) => {
    const [posts, setPosts] = useState();
    const [bttIndex, setIndex] = useState(0);
    const map = {0:'new', 1: 'rising', 2: 'best', 3:'top', 4:'hot'}
    function load(e) {
        if (e == undefined)
            e= 0
        axios.get("https://www.reddit.com/" + map[e] + ".json?limit=100")
            .then(response => {
                setPosts(response.data.data.children)
            })
            .catch(error => {
                setPosts()
            })
    }
    useEffect(() => {
        load();
    }, [])
    return (
        <View>
            <ScrollView>
                <ButtonGroup buttons={["New", "Rising", "Best", "Top", "Hot"]} selectedIndex={bttIndex} onPress={(e) => {setIndex(e); load(e)}}/>
                {posts ? posts.map((item, index) => (
                    <Card key={index}>
                        <Card.Title>/r/{item.data.subreddit}</Card.Title>
                        <Card.Title>{item.data.title}</Card.Title>
                        <Card.Title>{item.data.created}</Card.Title>
                        <Card.Divider />
                        {item.data.thumbnail ?
                            <Card.Image source={{ uri: item.data.thumbnail }} style={{ height: item.data.thumbnail_height, width: item.data.thumbnail_width }}>
                            </Card.Image> : <Text>NoImage</Text>}
                        {/* <Text>https://reddit.com{item.data.permalink}</Text> */}
                        <Text>{item.data.num_comments} Comments</Text>
                    </Card>
                )) : <Text>Nothing</Text>}
            </ScrollView>
        </View>
    )
}
export default HomePage;