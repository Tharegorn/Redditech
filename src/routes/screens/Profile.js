
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
            <Text style={{color: 'black'}}>Name : {auth.profile.name}</Text>
            <Text style={{color: 'black'}}>Desc : {auth.profile.desc}</Text>
            <Text style={{color: 'black'}}>karma : {auth.profile.karma}</Text>
            <Text style={{color: 'black'}}>Coins : {auth.profile.coins}</Text>
            <Text style={{color: 'black'}}>Prefix : {auth.profile.prefix}</Text>
            <Text style={{color: 'black'}}>url : {auth.profile.url}</Text>
            <Image source={{ uri: "https://styles.redditmedia.com/t5_zu6i3/styles/profileIcon_di7saosll7u71.jpg" }} />
        </>
    )
}

export default Profile;