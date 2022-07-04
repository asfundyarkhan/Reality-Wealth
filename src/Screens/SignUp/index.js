import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import StyleButton from '../../components/button_1/index';
import Inputs from '../../components/inputs/index';
import {IconButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const {navigate} = useNavigation();

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.mainContainer}>
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
          <Text style={styles.textTitle}>Welcome!</Text>
          <Text style={styles.text}>Sign in to Continue...</Text>
          <Text style={styles.textContainer}>Name</Text>
          <View style={styles.inputContainer}>
            <Inputs placeholderColor="black" name="JhonDoe" />
          </View>
          <Text style={styles.textContainer}>Email</Text>
          <View style={styles.inputContainer}>
            <Inputs placeholderColor="black" name="Email@sample.com" />
          </View>
          <Text style={styles.textContainer}>Password</Text>
          <View style={[styles.inputContainer, {marginBottom: 40}]}>
            <Inputs placeholderColor="black" name="***********" />
          </View>
          <StyleButton
            type="primary"
            content={'Sign Up'}
            onPress={() => {
              navigate('Skip');
            }}
          />
          <View style={styles.icon}>
            <IconButton icon="facebook" size={30} color="blue" />
            <IconButton icon="google-plus" size={35} color="red" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Have an account ?
            </Text>
            <Pressable
              onPress={() => {
                navigate('Signin');
              }}>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontWeight: '600',
                  color: 'black',
                  textDecorationLine: 'underline',
                  textDecorationColor: 'black',
                  marginLeft: 3,
                }}>
                Sign In Here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
