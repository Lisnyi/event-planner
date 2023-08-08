import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCRVvWjK3qyxhvsyWkb3s8syjTU_mEBRlA",
	authDomain: "event-planner-fcc8d.firebaseapp.com",
	projectId: "event-planner-fcc8d",
	storageBucket: "event-planner-fcc8d.appspot.com",
	messagingSenderId: "372676432132",
	appId: "1:372676432132:web:b381734e67133423d3c051"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
