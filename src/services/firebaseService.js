import { db } from '../firebaseConfig';
import {collection,getDocs,doc,getDoc,addDoc,Timestamp} from 'firebase/firestore';

export const getProducts = async () => {
  const productosRef = collection(db, 'productos');
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
    const productoRef = doc(db, 'productos', id);
    const snapshot = await getDoc(productoRef);
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};

export const createOrder = async (orderData) => {
    const ordersRef = collection(db, 'ordenes');
    const newOrder = {
        ...orderData,
        date: Timestamp.fromDate(new Date())
    };
    const docRef = await addDoc(ordersRef, newOrder);
    return docRef.id;
};