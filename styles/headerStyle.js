import {StyleSheet} from 'react-native';

const headerStyle = StyleSheet.create({
  container: {},
  bgImage: {
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  line: {
    width: 50,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 2.5,
    marginBottom: 15,
  },
  descAndTitleContainer: {
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  title: {
    color: '#121515',
    fontSize: 24,
    fontWeight: '700',
  },
  desc: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#888888',
    marginTop: 10,
  },
});

export default headerStyle;
