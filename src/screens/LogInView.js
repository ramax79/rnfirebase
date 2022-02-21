import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  onGoogleButtonPress,
  createUserEmail,
  loginUserEmail,
} from '../Auth/index';

const LogInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Login / Register User</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          autoFocus={true}         
          keyboardType={'email-address'}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          autoFocus={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginUserEmail(email, password)}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => createUserEmail(email, password)}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }>
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 5,
  },
  input: {
    alignItems: 'center',
    padding: 10,   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default LogInView;
