//---------------------------------
// Your own functions here
//---------------------------------
//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}

function sayHello() {
    //do something
}
//sayHello();    //invoke function

