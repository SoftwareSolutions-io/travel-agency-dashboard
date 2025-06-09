// functions/src/index.ts
import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

// admin.initializeApp();

// Example HTTP function
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Example Callable function
// export const myCallableFunction = functions.https.onCall((data, context) => {
//   // context.auth will be populated if the user is authenticated
//   // data will contain the data passed from the client
//   return { message: "Hello from callable function!", dataReceived: data };
// });

// Example Firestore trigger
// export const onUserCreate = functions.firestore
//   .document("users/{userId}")
//   .onCreate(async (snap, context) => {
//     const newValue = snap.data();
//     functions.logger.log("New user created:", newValue);
//     // Perform actions, e.g., send a welcome email
//   });

// Example Auth trigger
// export const onUserSignUp = functions.auth.user().onCreate(async (user) => {
//   functions.logger.log("User signed up:", user.email, user.uid);
//   // Perform actions, e.g., create a user document in Firestore
//   // await admin.firestore().collection("users").doc(user.uid).set({
//   //   email: user.email,
//   //   createdAt: admin.firestore.FieldValue.serverTimestamp(),
//   // });
// });
