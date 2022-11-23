import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyCjNJ8byRcdPzjX4KgoNdjuo7LYCpTWPQQ",
//   authDomain: "habemus-react.firebaseapp.com",
//   projectId: "habemus-react",
//   storageBucket: "habemus-react.appspot.com",
//   messagingSenderId: "555680038106",
//   appId: "1:555680038106:web:951ea67c9e7d317a6eb9e3"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCJe80-x1Sa0iAlo3pWkAzrg4BKMfJVnk0",
    authDomain: "curso-react-urquia.firebaseapp.com",
    projectId: "curso-react-urquia",
    storageBucket: "curso-react-urquia.appspot.com",
    messagingSenderId: "142765614633",
    appId: "1:142765614633:web:887ebd9ed537ba6658de38",
    measurementId: "G-7JH4T97WDV"
  };


const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);

export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
    const miColec = collection(fireStoreDb,'productos');
    const itemsSnapshot = await getDocs(miColec);
    console.log(itemsSnapshot)
    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItemsByCategory(categoryid){
    const miColec = collection(fireStoreDb,'productos');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    
})};

export async function getItem(id){
    const miColec = collection(fireStoreDb,'productos');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);

    
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
    
};

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb,'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ",orderDoc.id);
    return orderDoc.id;   
}