import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const footerStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    width: 150,
    height: 60,
    justifyContent: 'center',
  },
  btn2: {
    width: windowWidth,
    height: 60,
    backgroundColor: '#19A54A',
    justifyContent: 'center',
  },
  btn1Text: {
    fontWeight: '700',
    lineHeight: 19,
    fontSize: 16,
    color: '#121515',
  },
  btn2Text: {
    textAlign: 'center',
    color: 'white',
    lineHeight: 19,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default footerStyle;
