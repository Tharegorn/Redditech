
import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
} from 'react-native';
import { useAuth } from '../utils/useauth';

const Profile = () => {
    const auth = useAuth();
    useEffect(() => {
        auth.Profile()
    }, [])
    return (
        <>
            <Text>Name : {auth.profile.name}</Text>
            <Text>Desc : {auth.profile.desc}</Text>
            <Text>karma : {auth.profile.karma}</Text>
            <Text>Coins : {auth.profile.coins}</Text>
            <Text>Prefix : {auth.profile.prefix}</Text>
            <Text>url : {auth.profile.url}</Text>
            <Image source={{ uri: "https://styles.redditmedia.com/t5_zu6i3/styles/profileIcon_di7saosll7u71.jpg" }} />
        </>
    )
}

export default Profile;