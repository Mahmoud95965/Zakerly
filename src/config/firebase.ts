import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDgTnOb1Wiu-964QaV2Q1oxLYgWLJkqFsQ",
  authDomain: "zakerly0.firebaseapp.com",
  projectId: "zakerly0",
  storageBucket: "zakerly0.firebasestorage.app",
  messagingSenderId: "718838819739",
  appId: "1:718838819739:web:fb0c10967caeaee59d4f3e",
  measurementId: "G-TVZZCE0TF2"
};

// Add allowed domains for authentication
const allowedDomains = [
  'localhost',
  'toolversea.netlify.app',
  'zakerly0.firebaseapp.com'
];

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Configure allowed domains for authentication
allowedDomains.forEach(domain => {
  auth.useDeviceLanguage();
  googleProvider.setCustomParameters({
    'prompt': 'select_account',
    'hd': domain
  });
});

export default app;
