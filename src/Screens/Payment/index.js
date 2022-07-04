import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

const Payments = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Appbar style={{backgroundColor: '#fff'}}>
          <Appbar.Action
            icon="arrow-left"
            color="black"
            onPress={() => {
              console.log('menu should be open');
            }}
          />
          <Appbar.Content title="Payments" style={{marginLeft: 100}} />
        </Appbar>
        <View style={styles.colorStyle}>
          <Text style={styles.text}>Select Payment Method</Text>
        </View>
        <Pressable
          style={styles.Button}
          onPress={() => {
            navigate('PaymentInfo');
          }}>
          <Image source={require('../../../assets/paypalIcon.png')} />
          <Text style={{color: 'orange', fontWeight: '800'}}>PayPal</Text>
        </Pressable>
        <Pressable style={styles.Button2}>
          <Image source={require('../../../assets/stripeIcon.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
