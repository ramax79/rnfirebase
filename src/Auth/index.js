import auth from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '115361874622-88g5687j191nosh40ivq1ae2i5hhs82n.apps.googleusercontent.com',
});


export async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}


export function loginUserEmail(email, password) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
    })
    .catch(error => {
      console.error(error);
    });
}

export function createUserEmail(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}
