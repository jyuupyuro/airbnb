import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

const navigation = useNavigation();


  const onRegisterPressed = () => {
    console.warn('Register');
    navigation.navigate('DetailScreen');

  };
  const onSingInPressed = () => {
    console.warn('Sign In');
  };
  const onTermsOfUsePressed = () => {
    console.warn('termofuse');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('privacypolicy');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}> Create an account </Text>

      <Text style={styles.title2}>Username:</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

  <Text style={styles.title2}>Email:</Text>
      <CustomInput 
      placeholder="xxxxxx@gmail,com" 
      value={email} 
      setValue={setEmail} 
      />

  <Text style={styles.title2}>Password:</Text>
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />

      <CustomButton text="Next" onPress={onRegisterPressed} />

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          privacy Policy
        </Text>
        Policy
      </Text>

      <Text style={styles.text}>
        Have an Account ?{' '}
        <Text style={styles.sign} onPress={onSingInPressed}>
          {' '}
          SIGN IN
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C50',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB875',
  },
  sign: {
    color: '#0000FF',
  },
  title2: {
    padding: 10,
  }
});
  

export default SignUpScreen;
