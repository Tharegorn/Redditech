import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import { Card } from 'react-native-elements'
import axios from 'axios'

const HomePage = (navigation) => {
    const [posts, setPosts] = useState();
    const [trend, setTrend] = useState("top");
    function load() {
        axios.get("https://www.reddit.com/" + trend + ".json?limit=100")
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
                <Button title="New" onPress={() => { setTrend("new"); load() }} />
                <Button title="Rising" onPress={() => { setTrend("rising"); load() }} />
                <Button title="Best" onPress={() => { setTrend("best"); load() }} />
                <Button title="Top" onPress={() => { setTrend("top"); load() }} />
                <Button title="Hot" onPress={() => { setTrend("hot"); load() }} />
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