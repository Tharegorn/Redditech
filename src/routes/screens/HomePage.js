import React, { useState, useEffect } from 'react';
import {
    Text,
    Button,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { Card, SearchBar } from 'react-native-elements'
import axios from 'axios'

const HomePage = (navigation) => {
    const [posts, setPosts] = useState();
    const [search, setSearch] = useState("all");
    const [content, setContent] = useState("")
    function load() {
        axios.get("https://www.reddit.com/r/" + search + "/top.json?limit=100")
            .then(response => {
                setPosts(response.data.data.children)
                console.log("passed here")
            })
            .catch(error => {
                console.log("error")
                setPosts()
            })
    }
    useEffect(() => {
        load();
    }, [])
    return (
        <View>
            <ScrollView>
                <SearchBar placeholder="Serch a SubReddit"
                    onChangeText={(e) => { setContent(content + e);}}
                    onSubmitEditing={(e) => {setSearch(content); console.log(search); setContent("")}}
                    value={search === "all" ? "" : search} />
                {posts ? posts.map((item, index) => (
                    <Card key={index}>
                        <Card.Title>{item.data.title}</Card.Title>
                        <Card.Divider />
                        {item.data.thumbnail ?
                            <Card.Image source={{ uri: item.data.thumbnail }} style={{ height: item.data.thumbnail_height, width: item.data.thumbnail_width }}>
                            </Card.Image> : <></>}
                        <Text>{item.data.thumbnail}</Text>
                        <Text>https://reddit.com{item.data.permalink}</Text>
                        <Text>{index}</Text>
                    </Card>
                )) : <Text>Nothing</Text>}
            </ScrollView>
        </View>
    )
}
export default HomePage;