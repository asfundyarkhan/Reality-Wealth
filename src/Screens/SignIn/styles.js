import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 100,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '90%',
  },
  topLogoView: {
    position: 'absolute',
    top: 65,
    left: 28,
    right: 247,
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
    marginTop: 250,
  },
  secondryView: {
    flex: 1,
    width: '100%',
    marginTop: '90%',
  },
  textContainer: {
    width: '100%',
    marginLeft: 40,
    fontSize: 20,
    color: 'green',
    fontWeight: 'normal',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  icon: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
export default styles;
