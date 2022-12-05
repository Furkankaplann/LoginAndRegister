import {StyleSheet} from 'react-native';

const customInputStyle = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.1,
    textTransform: 'uppercase',
    color: '#888888',
  },
  textInput: {
    backgroundColor: '#EBEDEF',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 10,
  },
  inputWrapper: {},
  icon: {
    position: 'absolute',
    right: 20,
    top: 25,
  },
});

export default customInputStyle;
