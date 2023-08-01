import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assests/images/logo.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Navigation from '../../components/Navigation';



const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('sign in');
  };

  const onForgotPassword = () => {
    console.warn('forgot');
  };

  const onRegisterPressed = () => {
    
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[StyleSheet.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="sign in" onPress={onSignInPressed} />

      <CustomButton
        text="Forgot Password"
        onPress={onForgotPassword}
        type="TERTIARY"
      />

      <CustomButton
        text="Don't have an account, Register"
        onPress={onRegisterPressed}
        type="TERTIARY"
      />
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
});

export default SignInScreen;
