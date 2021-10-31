import { authorize } from 'react-native-app-auth';
import CardPost from '../components/CardPost';


const config = {
    additionalParameters: {duration: 'permanent'},
    redirectUrl: 'com.newreddit://oauth2redirect/reddit',
    clientId: 'cJBN5Flkd8Uscn9w-SzI-A',
    clientSecret: '', // empty string - needed for iOS
    scopes: ['identity', 'edit', 'subscribe', 'save', 'submit', 'read', 'modconfig', 'account', 'vote', 'flair', 'mysubreddits'],
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
        console.log(authState)
        return (await Promise.resolve({token: authState.accessToken, validity: authState.accessTokenExpirationDate, refreshToken: authState.refreshToken}))
    } catch (e) {
    }

}

module.exports = {
    GenToken,
}