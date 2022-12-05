import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// Styles
import {footerStyle} from '../styles';

const Footer = ({btn1Text, btn2Text, btn1Click}) => {
  return (
    <View style={footerStyle.container}>
      <TouchableOpacity onPress={btn1Click} style={footerStyle.btn1}>
        <Text style={footerStyle.btn1Text}>{btn1Text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.btn2}>
        <Text style={footerStyle.btn2Text}>{btn2Text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
