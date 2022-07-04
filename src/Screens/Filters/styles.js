import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    top: 65,
    right: 12,
    width: '12%',
    aspectRatio: 1,
    backgroundColor: 'green',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallGrayContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 10,
    height: 50,
    padding: '2%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
  },
  button: {
    height: 50,
    padding: '2%',
    marginTop: 20,
    marginLeft: 250,
    marginRight: 20,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});
export default styles;
