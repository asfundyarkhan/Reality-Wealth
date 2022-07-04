import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     width: '100%',
  //     height: '100%',
  //     padding: 10,
  //     backgroundColor: '#fff',
  //   },
  containerFlatList: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
  },
  timeStamp: {
    fontSize: 11,
    fontFamily: 'Font-Regular',
    fontWeight: '600',
    color: 'gray',
    marginTop: 5,
  },
  comment: {
    fontSize: 15,
    fontFamily: 'Foundation',
    fontWeight: '600',
    color: 'gray',
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginTop: '3%',
    width: '80%',
    height: '100%',
    padding: '2%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
  },
});
export default styles;
