import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: 6,
  },
  textTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Foundation',
    color: 'green',
    marginRight: '60%',
    marginBottom: '2%',
  },
  grayContainer: {
    backgroundColor: '#EAECEE',
    flex: 1,
    width: '90%',
    marginLeft: '5%',
    padding: 10,
    height: '100%',
    marginHorizontal: '10%',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    font: 'poppins',
    marginLeft: '5%',
    marginTop: '5%',
    fontWeight: '400',
    lineHeight: 18,
    color: '#000',
  },
  smallButton: {
    borderColor: 'silver',
    width: 90,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.2,
  },
  topLogoView: {
    alignItems: 'center',
    backgroundColor: 100,
  },
  topLogo: {
    width: '30%',
    height: '8%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  disclosureView: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
export default styles;
