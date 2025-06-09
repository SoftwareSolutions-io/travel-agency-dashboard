// lib/firebase/config.ts
// Initialize Firebase Admin SDK (for server-side use)
// Ensure you have GOOGLE_APPLICATION_CREDENTIALS set in your environment
// Example: export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"

// Placeholder for Firebase client-side config
// Replace with your actual Firebase project configuration
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional: for Google Analytics
};

// Note: For server-side Firebase (e.g., in API routes or Firebase Functions),
// you would typically use the Firebase Admin SDK.
// import admin from 'firebase-admin';
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.applicationDefault(), // Or specify service account key path
//     // databaseURL: "https://<DATABASE_NAME>.firebaseio.com" // If using Realtime Database
//   });
// }
// export const adminAuth = admin.auth();
// export const db = admin.firestore();
// export const storage = admin.storage();
