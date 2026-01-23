const firebaseConfig = {
  apiKey: "AIzaSyBiQQ5hvmvHa3IFY5xqeXDQEvoABuHi3AA",
  authDomain: "suria-cardapio.firebaseapp.com",
  databaseURL: "https://suria-cardapio-default-rtdb.firebaseio.com",
  projectId: "suria-cardapio",
  storageBucket: "suria-cardapio.firebasestorage.app",
  messagingSenderId: "896511649955",
  appId: "1:896511649955:web:9f97b5b6f76fd007b3f716"
};

// Inicializa Firebase UMA VEZ
firebase.initializeApp(firebaseConfig);

// Banco
const db = firebase.database();
