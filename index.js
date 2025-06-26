/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import Config from "react-native-config";

// Disable console logs in release builds
if (!__DEV__) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: Config.ENV_FIREBASE_API_KEY,
    authDomain: Config.ENV_FIREBASE_AUTH_DOMAIN,
    projectId: Config.ENV_FIREBASE_PROJECT_ID,
    storageBucket: Config.ENV_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Config.ENV_FIREBASE_MESSAGING_SENDER_ID,
    appId: Config.ENV_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// FIXME: getAnalytics is not a function
// const analytics = getAnalytics(app).isSupported();
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

AppRegistry.registerComponent(appName, () => App);
