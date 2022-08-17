import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBTMGJCRyl825kZHkmGB_RSjVOQl7brBKY",
    authDomain: "fancyshop-f9c6f.firebaseapp.com",
    databaseURL: "https://fancyshop-f9c6f-default-rtdb.firebaseio.com",
    projectId: "fancyshop-f9c6f",
    storageBucket: "fancyshop-f9c6f.appspot.com",
    messagingSenderId: "169582259238",
    appId: "1:169582259238:web:51a92e39a0b0a94fe20ae7",
    measurementId: "G-2TQMPK12B4"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}