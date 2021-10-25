import React, { useState, useEffect, Components } from 'react';
import {
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useAuth } from '../utils/useauth';
import { Card } from 'react-native-elements'
import axios from 'axios';

const Search = () => {
    const auth = useAuth();
    const [search, setSearch] = useState("");
    const [infos, setInfos] = useState(null);
    const [posts, setPosts] = useState(null);
    function change(e) {
        setSearch(e)
        setPosts(null)
        axios.get("https://www.reddit.com/r/" + e + "/about.json")
            .then(response => {
                const data = response.data.data
                if (data.url != null) {
                    setInfos({
                        accept_follows: data.accept_followers,
                        name: data.title,
                        sub_name: data.url,
                        header: data.header_img,
                        followers: data.subscribers,
                        online: data.active_user_count,
                        description: data.public_description
                    })
                } else {
                    setInfos(null)
                }
            })
            .catch(error => {
                setInfos(null)
            })
    }
    function getPosts() {
        axios.get("https://www.reddit.com/r/" + search + "/top.json?limit=100")
            .then(response => {
                setPosts(response.data.data.children)
            })
            .catch(error => {
                setPosts()
            })
    }
    return (
        <>
            <SearchBar placeholder="Type here..."
                onChangeText={(e) => { change(e) }}
                value={search} />
            <ScrollView>
                {infos == null ?
                    <Text>Any subreddit was found</Text> : <>
                        <TouchableOpacity onPress={() => getPosts()}>
                            <Card>
                                <Card.FeaturedTitle>{infos.name}</Card.FeaturedTitle>
                                <Card.Title>{infos.sub_name}</Card.Title>
                                <Card.Title>Follows : {infos.followers}</Card.Title>
                                <Card.Title>Online : {infos.online}</Card.Title>
                                <Card.Divider />
                                <Text>Description : {infos.description}</Text>
                            </Card>
                        </TouchableOpacity>
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
                        )) : <Text></Text>}
                    </>}
            </ScrollView>

        </>

    )
}

export default Search;