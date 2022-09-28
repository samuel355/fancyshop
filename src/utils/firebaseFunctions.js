import { doc, getDocs, setDoc, query, collection, orderBy } from "firebase/firestore"
import {firestore} from '../firebase.config'

//Saving new item
export const saveItem = async (data) =>{
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, {
            merge: true
        }
    )
}

//fetch all items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
    );

    return items.docs.map((doc) => doc.data())
}