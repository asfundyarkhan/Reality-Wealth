import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button, Appbar} from 'react-native-paper';

const PaymentPlan = () => {
  return (
    <View style={styles.container}>
      <Appbar style={{backgroundColor: '#fff', zIndex: 10}}>
        <Appbar.Content title="Memberships" titleStyle={{marginLeft: 10}} />
        <Appbar.Content title="skip" titleStyle={{marginLeft: 100}} />
        <Appbar.Action
          icon="chevron-right"
          color="black"
          onPress={() => {
            console.log('menu should be open');
          }}
        />
      </Appbar>
      <View style={{height: 60}}></View>
      <View style={styles.checkCard}>
        <View style={{flexDirection: 'row', height: 22}}>
          <Text style={styles.textTitleCard}>Free</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.subTitle}>
              {'  '}
              <Image
                source={require('../../../assets/bx-check-circle_1.png')}
              />
              {'  View all Property information'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Mortage Calculator'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Contact & Support'}
            </Text>
          </View>
          <Button
            mode="contained"
            compact={true}
            theme={{roundness: 5, colors: {primary: 'rgba(0, 121, 50, 1)'}}}
            style={{marginLeft: 30, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: 'white'}}>Continue Free</Text>
          </Button>
        </View>
      </View>
      <View style={styles.checkCard}>
        <View style={{flexDirection: 'row', height: 22}}>
          <Text style={styles.textTitleCard}>Monthly</Text>
          <Text style={styles.greenTitle}>$34.99</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.subTitle}>
              {'  '}
              <Image
                source={require('../../../assets/bx-check-circle_1.png')}
              />
              {'  View all Property information'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Mortage Calculator'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Contact & Support'}
            </Text>
          </View>
          <Button
            mode="contained"
            compact={true}
            theme={{roundness: 5, colors: {primary: 'rgba(54, 54, 54, 1)'}}}
            style={{marginLeft: 30, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: '#fff'}}>Choose Plan</Text>
          </Button>
        </View>
      </View>
      <View style={styles.checkCard}>
        <View style={{flexDirection: 'row', height: 22}}>
          <Text style={styles.textTitleCard}>Yearly</Text>
          <Text style={styles.greenTitle}>$365.00</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.subTitle}>
              {'  '}
              <Image
                source={require('../../../assets/bx-check-circle_1.png')}
              />
              {'  View all Property information'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Mortage Calculator'}
            </Text>
            <Text style={styles.subTitle}>
              {' '}
              <Image
                source={require('../../../assets/bx-check-circle_2.png')}
              />
              {'  Contact & Support'}
            </Text>
          </View>
          <Button
            mode="contained"
            compact={true}
            theme={{roundness: 5, colors: {primary: 'rgba(54, 54, 54, 1)'}}}
            style={{marginLeft: 30, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: 'white'}}>Choose Plan</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PaymentPlan;
