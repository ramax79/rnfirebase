import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import LogInView from './src/screens/LogInView';
import auth from '@react-native-firebase/auth';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  if (!user) {
    return <LogInView />;
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="SignOut" onPress={signOut} />
    </View>
  );
}

export default App;
