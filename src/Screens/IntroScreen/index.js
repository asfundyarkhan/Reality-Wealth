import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';

const IntroScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topLogoView}>
        <Image
          style={styles.topLogo}
          source={require('../../../assets/topLogo.png')}
        />
      </View>
      <View style={styles.topLeafeView}>
        <Image
          style={styles.topLeafe}
          source={require('../../../assets/topLeafe.png')}
        />
      </View>
      <View style={styles.bottomLeafeView}>
        <Image
          style={styles.bottomLeafe}
          source={require('../../../assets/bottomLeafe.png')}
        />
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={[styles.button, {backgroundColor: '#168C50'}]}
          onPress={() => {
            navigate('Signin');
          }}>
          <Text style={[styles.text, {color: 'white'}]}>Get Started</Text>
        </Pressable>
      </View>
      <View style={styles.bottomLogoView}>
        <Image
          style={styles.bottomLogo}
          source={require('../../../assets/bottom_logo.png')}
        />
      </View>
    </View>
  );
};

export default IntroScreen;
