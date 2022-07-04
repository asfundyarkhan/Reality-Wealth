import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white',
    //backgroundColor: 'blue',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: 'black',
    marginRight: '55%',
    marginBottom: '10%',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '90%',
  },
  topLogoView: {
    position: 'absolute',
    top: 60,
    left: 15,
    right: 240,
  },
  topLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    padding: '15%',
  },
  topLeafeView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    left: 100,
    right: 0,
    bottom: 718,
  },
  topLeafe: {
    width: '70%',
    height: '50%',
    resizeMode: 'contain',
    padding: '50%',
  },
  bottomLeafeView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 65,
    left: 160,
    right: 0,
    bottom: 706,
  },
  bottomLeafe: {
    width: '50%',
    height: '70%',
    resizeMode: 'contain',
    padding: '50%',
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  textContainer: {
    width: '100%',
    marginTop: '5%',
    marginLeft: '10%',
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    marginBottom: '1%',
  },
  icon: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1%',
    marginBottom: '1%',
  },
  textTitle: {
    fontSize: 25,
    fontFamily: 'Foundation',
    color: 'green',
    marginRight: '60%',
  },
});
export default styles;
