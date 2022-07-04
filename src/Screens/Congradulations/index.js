import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Congradulations = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../../assets/Rectangle830.png')}>
          <Pressable
            onPress={() => {
              navigate('Details');
            }}>
            <View style={styles.whiteContainer}>
              <Image
                style={{marginLeft: 20, marginBottom: 20}}
                source={require('../../../assets/confettiIcon.png')}
              />
              <Text
                style={{fontSize: 20, fontWeight: '900', marginVertical: 15}}>
                Congradulations
              </Text>
              <Text style={{fontSize: 18, marginBottom: 10}}>
                You are Upgraded to Pro
              </Text>
            </View>
          </Pressable>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Congradulations;
