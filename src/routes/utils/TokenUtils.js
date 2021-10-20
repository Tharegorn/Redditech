import { authorize } from 'react-native-app-auth';


const config = {
    redirectUrl: 'com.newreddit://oauth2redirect/reddit',
    clientId: 'cJBN5Flkd8Uscn9w-SzI-A',
    clientSecret: '', // empty string - needed for iOS
    scopes: ['identity'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
        tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
        token: {
            Authorization: 'Basic Y0pCTjVGbGtkOFVzY245dy1TekktQTo=',
        },
    },
};

async function GenToken() {

    try {
        const authState = await authorize(config);
        return (await Promise.resolve({token: authState.accessToken, validity: authState.accessTokenExpirationDate}))
    } catch (e) {
        console.log(e)
    }

}

module.exports = {
    GenToken,
}