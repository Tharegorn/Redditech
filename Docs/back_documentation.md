Back-End Documention

![](https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg)
Auth Class

Authenticate

By create a variable auth, who point on useAuth(), you can access now to all informations about Authentification and User Handling.


Example
```js
import {useAuth} from '../utils/useauth';

function example() {
    const auth = useAuth();

    auth.Authenticate();
    return ({auth.token ? <Text>Connected</Text>:<Text>Not Connected</Text>})
}
```

List of functions that can be used for user

Context Libraty : 🐠 useAuth

```js

useProvideAuth(){}

Authenticate(){
    //this function will launch the authentication part to connect on user reddit account
}

Profile(){
    //Will load in auth.profile variable all profiles informations : name, profile_pic, desc, karma, coins, prefix, url, num_comments
}

Prefs(){
        //Will load in auth.prefs variable all preferences informations : lang, pms, over_18, presence, nsfw, beta, autoplay, e_p_message
}
```

List of variables thant can be used for user

```js
const [token, setToken] = useState(null);
// token will contains the token

const [validity, setValidity] = useState(null);
// validity will contains the token validity date

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
// profile will contains the profile information

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
// prefs will contains the user preferences

```

Licrary for reddit authentification: 

![](https://raw.githubusercontent.com/FormidableLabs/react-native-app-auth/main/docs/react-native-app-auth-logo.png)

Library used for requests:

![](https://axios-http.com/assets/logo.svg)