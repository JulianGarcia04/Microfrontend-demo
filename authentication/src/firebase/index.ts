// Import the functions you need from the SDKs you need
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const functions = getFunctions();

connectAuthEmulator(auth, 'http://127.0.0.1:9099');
connectFirestoreEmulator(db, '127.0.0.1', 8080);
connectStorageEmulator(storage, '127.0.0.1', 9199);
connectFunctionsEmulator(functions, '127.0.0.1', 5001);

export { auth, db, storage, functions };
