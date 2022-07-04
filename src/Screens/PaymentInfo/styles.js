import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'poppins',
    color: 'green',
    marginTop: 10,
  },
  grayContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'blue',
    width: '40%',
    height: '40%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'poppins',
    fontStyle: '600',
    fontFamily: 'poppins',
    fontWeight: '600',
    lineHeight: 24,
    color: 'black',
    marginLeft: '2%',
  },
  containerFlatList: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textTitleCard: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(45, 41, 38, 1)',
  },
  timeStamp: {
    fontSize: 11,
    fontFamily: 'Font-Regular',
    fontWeight: '600',
    color: 'gray',
    marginTop: 5,
  },
  commentCard: {
    fontSize: 11,
    fontFamily: 'poppins',
    fontWeight: '500',
    lineHeight: 16.5,
    color: 'rgba(45, 41, 38, 1)',
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginTop: '3%',
    width: '80%',
    height: '100%',
    padding: '2%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  containerGraytList: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  smallGrayContainer: {
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginTop: '1%',
    marginBottom: '3%',
    height: 50,
    padding: '3%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
  },
  textInputContainer: {
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginTop: '1%',
    marginLeft: '4%',
    marginBottom: '3%',
    height: 50,
    width: 150,
    padding: '3%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
  },
  textFieldColor: {
    borderBottomColor: 'green',
    borderBottomWidth: 3,
  },
  textTitleGrayCard: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    color: 'rgba(45, 41, 38, 1)',
  },
  timeGrayStamp: {
    fontSize: 14,
    fontFamily: 'popins',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 21,
    marginLeft: '2%',
  },
  titleTextBottom: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'poppins',
    color: 'green',
  },
  textBottom: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: '400',
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },
  button: {
    height: 50,
    width: 200,
    padding: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default styles;
