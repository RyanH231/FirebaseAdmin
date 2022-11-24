import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import {getDatabase, ref, set} from "firebase/database";

const app = firebase.initializeApp(
    {       
        apiKey: "AIzaSyAYKr3jC1KfcJ9hhEb-uW8YsY3Hedj9QMM",
        authDomain: "development-authorization.firebaseapp.com",
        projectId: "development-authorization",
        storageBucket: "development-authorization.appspot.com",
        messagingSenderId: "716659952515",
        appId: "1:716659952515:web:dd432cb795eafa084c04b6"
    }
)


export const auth = app.auth();
export const db = getDatabase();

function WriteUserData(artistName, albumName, year)
{
    const reference = ref(db, "/dashboard");
    set(reference, 
        {artistName: artistName, 
        albumTitle: albumName,
         year: year});
}

WriteUserData("Iron Maiden", "Iron Maiden", 1980);

export default app;