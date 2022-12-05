import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import React from 'react';

// style
import {loginStyle} from '../styles';

// Components
import {Header, Footer, CustomInput} from '../components';

// Inline Component
const LoginForm = () => {
  return (
    <View style={loginStyle.loginFormContainer}>
      <CustomInput labelText="your email" />
      <CustomInput labelText="password" />
      <TouchableOpacity>
        <Text style={loginStyle.forgotPasswordStyle}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = props => {
  return (
    <ScrollView style={loginStyle.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Header title="Login" desc="Sign to your account" />
      <LoginForm />
      <Footer
        btn1Click={() => props.navigation.navigate('Register')}
        btn1Text="I don’t have account"
        btn2Text="Login"
      />
    </ScrollView>
  );
};
export default LoginScreen;
