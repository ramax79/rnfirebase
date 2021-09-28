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
          // inlineImageLeft={'email'}
          // inlineImagePadding={5}
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
          // inlineImageLeft={'password'}
          // inlineImagePadding={5}
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

    // flex: 1,
    // justifyContent: 'center',
    // marginTop: 10,
    // alignItems: 'center',
    // flexWrap: 'wrap',
    // flex: 1,
    // flexDirection: 'row',
    // height: 20,
    // backgroundColor: '#2196F3',
    // marginTop: 8,
    // marginBottom: 8,
  },
  input: {
    // flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // height: 5,
    alignItems: 'center',
    padding: 10,
    // margin: 15,
    // backgroundColor: '#2196F3',
    // width: 80,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: ‘#000’
  },
});

export default LogInView;
