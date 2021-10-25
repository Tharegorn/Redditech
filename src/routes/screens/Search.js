import React, { useState, useEffect, Components } from 'react';
import {
    Text,
    Button,
    Image,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useAuth } from '../utils/useauth';
import axios from 'axios';

const Search = () => {
    const auth = useAuth();
    const [search, setSearch] = useState("");
    const [infos, setInfos] = useState(null)
    function change(e) {
        setSearch(e)
        axios.get("https://www.reddit.com/r/" + e + "/about.json")
            .then(response => {
                const data = response.data.data
                console.log(response.data.data)
                setInfos({
                    accept_follows: data.accept_followers,
                    name: data.display_name,
                    sub_name: data.display_name_prefixed,
                    description: data.submit_text
                })
                // setPosts(response.data.data.children)
            })
            .catch(error => {
                setInfos(null)
            })
    }
    return (
        <>
            <SearchBar placeholder="Type here..."
                onChangeText={(e) => { change(e) }}
                value={search} />
            {infos == null ?
                <Text>Any subreddit was found</Text> : <>
                    <Text>Founded</Text>
                    <Text>Name : {infos.name}</Text>
                    <Text>SubReddit : {infos.sub_name}</Text>
                    <Text>Follows : {infos.accept_follows}</Text>
                    <Text>Desc : {infos.submit_text}</Text>
                    </>}
        </>

    )
}

export default Search;