export default {
    firebaseLogin: () => {
      let valueInputTextL = document.getElementById("emailLogin").value;      
      const valueInputPasswordL = document.querySelector("#passwordLogin").value;
      firebase.auth().signInWithEmailAndPassword(valueInputTextL, valueInputPasswordL)
    }
}

