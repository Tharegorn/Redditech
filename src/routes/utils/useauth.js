import React, { useState, useEffect, useContext, createContext } from 'react';
import { GetProfile, GetPrefs } from './GetReddit';
import { GenToken } from './TokenUtils';
import axios from 'axios'

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [token, setToken] = useState(null);
  const [validity, setValidity] = useState(null);
  const [profile, setProfile] = useState({
    name: null,
    profile_pic: null,
    desc: null,
    karma: null,
    coins: null,
    prefix: null,
    url: null,
    num_comments: null,
  });
  const [prefs, setPrefs] = useState({
    lang: null,
    pms: null,
    over_18: null,
    presence: null,
    nsfw: null,
    beta: null,
    autoplay: null,
    e_p_message: null,
  });

  function Authenticate() {
    GenToken().then(res => {
      setToken(res.token);
    });
  }

  function Profile() {
    GetProfile(token).then((response) => {
      axios.get("https://reddit.com/user/" + response.data.name + "/comments.json").then((res) => {
        setProfile({
          name: response.data.name,
          profile_pic: (response.data.icon_img).split('?')[0],
          desc: response.data.subreddit.public_description,
          karma: response.data.total_karma,
          coins: response.data.coins,
          prefix: response.data.subreddit.display_name_prefixed,
          url: response.data.subreddit.url,
          num_comments: res.data.data.children.length
        })
      })
    });
  }

  function Prefs() {
    GetPrefs(token).then(res => {
      setPrefs({
        lang: res.data.country_code,
        pms: res.data.accept_pms,
        over_18: res.data.over_18,
        presence: res.data.show_presence,
        nsfw: res.data.label_nsfw,
        beta: res.data.beta,
        autoplay: res.data.video_autoplay,
        e_p_message: res.data.email_private_message,
      });
    });
  }
  return {
    token,
    profile,
    prefs,
    setToken,
    setValidity,
    Authenticate,
    setProfile,
    Profile,
    Prefs,
  };
}
