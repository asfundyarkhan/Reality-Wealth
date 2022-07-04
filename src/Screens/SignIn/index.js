import {View, Text, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import StyleButton from '../../components/button_1/index';
import Inputs from '../../components/inputs/index';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import authContext from '../../utility/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const SignIn = () => {
  const {navigate} = useNavigation();
  const {login} = useContext(authContext);
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        <View style={styles.topLogoView}>
          <Image
            source={require('../../../assets/topLogo.png')}
            style={styles.topLogo}
          />
        </View>
        <View style={styles.topLeafeView}>
          <Image
            source={require('../../../assets/topSmallLeafe.png')}
            style={styles.topLeafe}
          />
        </View>
        <View style={styles.bottomLeafeView}>
          <Image
            source={require('../../../assets/bottomSmallLeafe.png')}
            style={styles.bottomLeafe}
          />
        </View>
        <View style={styles.smallContainer}>
          <Text style={styles.textContainer}>Email</Text>
          <View style={styles.inputContainer}>
            <Inputs name="Email@sample.com" />
          </View>
          <Text style={styles.textContainer}>Password</Text>
          <View style={styles.inputContainer}>
            <Inputs name="***********" />
          </View>
          <Text style={{marginLeft: '60%', marginBottom: 30, color: 'black'}}>
            Forgot Password?
          </Text>
          <StyleButton
            type="primary"
            content={'Sign In'}
            onPress={() => {
              login();
            }}
          />
          <View style={styles.icon}>
            <IconButton icon="facebook" size={30} color="blue" />
            <IconButton icon="google-plus" size={35} color="red" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Not Have yet ?
            </Text>
            <Pressable
              onPress={() => {
                navigate('Signup');
              }}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  textDecorationColor: 'green',
                  marginLeft: 3,
                }}>
                Create an Account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
