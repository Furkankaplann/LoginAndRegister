import {ScrollView, Text, View} from 'react-native';
import React from 'react';

// style
import {registerStyle} from '../styles';

// Components
import {Header, Footer, CustomInput} from '../components';

// Inline Components
const RegisterForm = () => {
  return (
    <View style={registerStyle.registerForm}>
      <CustomInput labelText="your name" />
      <CustomInput labelText="email" />
      <CustomInput labelText="password" />
    </View>
  );
};
const RegisterScreen = props => {
  return (
    <ScrollView>
      <Header title="Register" desc="Create your account" />
      <RegisterForm />
      <Footer
        btn1Click={() => props.navigation.navigate('Login')}
        btn1Text="I have an account"
        btn2Text="Register"
      />
    </ScrollView>
  );
};
export default RegisterScreen;
