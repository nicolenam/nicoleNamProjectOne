  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyAHJ70VWRNjXGa3G2H9v-s3FV-HWmUQ2c0",

    authDomain: "novas-ecommerce-store.firebaseapp.com",

    databaseURL: "https://novas-ecommerce-store-default-rtdb.firebaseio.com",

    projectId: "novas-ecommerce-store",

    storageBucket: "novas-ecommerce-store.appspot.com",

    messagingSenderId: "694888894231",

    appId: "1:694888894231:web:ebfe86f862a53f1d99f152"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  export default app;
