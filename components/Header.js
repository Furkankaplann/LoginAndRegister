import {Text, View, ImageBackground} from 'react-native';
import React from 'react';

// Syles
import {headerStyle} from '../styles';
const Header = props => {
  console.log(props);
  return (
    <View style={headerStyle.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        resizeMode="cover"
        style={headerStyle.bgImage}>
        <View style={headerStyle.line}></View>
      </ImageBackground>
      <View style={headerStyle.descAndTitleContainer}>
        <Text style={headerStyle.title}>{props.title}</Text>
        <Text style={headerStyle.desc}>{props.desc}</Text>
      </View>
    </View>
  );
};
export default Header;
