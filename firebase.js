import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBHKXp_GcG_Ox1E6F2mcFr0-wrA3ITxQUE",
	authDomain: "rn-uber-eats-clone-yt1.firebaseapp.com",
	projectId: "rn-uber-eats-clone-yt1",
	storageBucket: "rn-uber-eats-clone-yt1.appspot.com",
	messagingSenderId: "390403615386",
	appId: "1:390403615386:web:70734754c401f0de7b0d23",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
