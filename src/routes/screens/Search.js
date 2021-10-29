import React, { useState, useEffect, Components } from 'react';
import {
    Text,
    Button,
    Image,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useAuth } from '../utils/useauth';
import { Card } from 'react-native-elements'
import axios from 'axios';

const Search = () => {
    const auth = useAuth();
    const [bttProps, setBtt] = useState(null)
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
                        name: data.display_name,
                        sub_name: data.url,
                        header: data.header_img,
                        followers: data.subscribers,
                        online: data.active_user_count,
                        description: data.public_description,
                        icon: data.community_icon,

                    })
                    if (auth.token) {
                        auth.Subs()
                        for (var e = 0; auth.subs[e]; e++) {
                            if (auth.subs[e] === data.id) {
                                setBtt('unsub')
                                break;
                            } else setBtt('sub')
                        }
                    }
                } else {
                    setInfos(null)
                }
            })
            .catch(error => {
                setInfos(null)
            })
    }
    // useEffect(() => {
    //     if (auth.token) {
    //         setBtt("qsd")
    //     } else {
    //         setBtt("connect")
    //     }
    // }, [])
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
                                {infos.icon ? <Card.Image source={{ uri: infos.icon.split('?')[0] }} style={{ width: 50, height: 50 }} /> : <></>}
                                <Card.Title>{infos.sub_name}</Card.Title>
                                <Card.Title>Follows : {infos.followers}</Card.Title>
                                <Card.Title>Online : {infos.online}</Card.Title>
                                <Card.Divider />
                                {infos.header ? <Card.Image source={{ uri: infos.header }} style={{ height: 100 }} /> : <></>}
                                <Text>Description : {infos.description}</Text>
                                {bttProps === "sub" ?
                                    <Button title="Sub" onPress={() => {}}></Button>
                                    : <Button title="Unsub" onPress={() => {}}></Button>}
                            </Card>
                        </TouchableOpacity>
                        {posts ? posts.map((item, index) => (
                            <View key={index} style={{
                                height: 90,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                borderRadius: 15,
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1,
                                shadowRadius: 8,
                                elevation: 8,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 16,
                                paddingRight: 14,
                                marginTop: 6,
                                marginBottom: 6,
                                marginLeft: 16,
                                marginRight: 16
                            }}>
                                <Text>/r/{item.data.subreddit}</Text>
                                <Text>{item.data.title}</Text>
                                <Text>{item.data.created}</Text>
                                {item.data.thumbnail ?
                                    <Image source={{ uri: item.data.thumbnail }} style={{ height: item.data.thumbnail_height, width: item.data.thumbnail_width }}>
                                    </Image> : <Text>NoImage</Text>}
                                {/* <Text>https://reddit.com{item.data.permalink}</Text> */}
                                <Text>{item.data.num_comments} Comments</Text>
                            </View>
                        )) : <Text></Text>}
                    </>}
            </ScrollView>

        </>

    )
}

export default Search;