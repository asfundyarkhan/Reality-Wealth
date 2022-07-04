import {View, Text, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {Button} from 'react-native-paper';
import StyleButton from '../../components/button_1';
import {useNavigation} from '@react-navigation/native';
import authContext from '../../utility/AuthContext';

const Disclosure = () => {
  const {navigate} = useNavigation();
  const [focus, setFocus] = useState(false);
  const {login} = useContext(authContext);
  return (
    <View style={styles.container}>
      <Image
        style={styles.topLogo}
        source={require('../../../assets/topLogo.png')}
      />

      <View style={styles.grayContainer}>
        <Text style={styles.textTitle}>Disclosure:</Text>
        <View style={styles.disclosureView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            amet, mi feugiat tortor tellus cursus. Neque faucibus imperdiet sem
            in iaculis. Sed posuere risus facilisi velit magnis tristique
            interdum est. Fermentum euismod sed velit quam duis malesuada
            aliquet adipiscing nec. Tortor, commodo magna sed adipiscing
            convallis. Amet, quis vivamus quis facilisi aliquam. Morbi non
            mauris et nunc commodo malesuada nisl. Varius enim pulvinar at a
            scelerisque quisque. Leo at imperdiet feugiat tincidunt integer
            facilisis. Est orci quis tempor quis. Suspendisse id elit proin sed
            proin commodo in scelerisque gravida. Ullamcorper nibh morbi arcu
            congue viverra scelerisque tortor metus dolor. Sed risus purus
            commodo quis sit cursus in integer. Malesuada cursus elementum
            volutpat fermentum, est nullam viverra ut. Et massa leo urna
            dignissim aliquet. est nullam viverra ut. Et massa leo urna
            dignissim aliquet.
          </Text>
        </View>
      </View>
      <Text style={styles.text}>
        I have read and understand the following disclosures.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: '10%',
          marginTop: '4%',
          paddingHorizontal: '10%',
        }}>
        <Button
          mode="outlined"
          theme={{colors: focus ? 'green' : 'black'}}
          onPress={focus => setFocus(!focus)}
          focusable={true}
          style={styles.smallButton}
          labelStyle={{fontWeight: '300', fontStyle: 'normal'}}>
          No
        </Button>
        <Button
          mode="outlined"
          theme={{colors: focus ? 'green' : 'black'}}
          onPress={focus => setFocus(!focus)}
          style={styles.smallButton}
          labelStyle={{fontWeight: '300', fontStyle: 'normal'}}>
          Yes
        </Button>
      </View>
      <StyleButton
        type="primary"
        content={'Continue'}
        onPress={() => {
          login();
        }}
      />
    </View>
  );
};

export default Disclosure;
