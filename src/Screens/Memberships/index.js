import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Memberships = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Contact Details</Text>
      </View>
      <View style={styles.greenCard}>
        <View style={{flexDirection: 'row', height: 22}}>
          <Text style={{color: 'white'}}>{'Monthly'}</Text>
          <Image
            style={{marginLeft: '70%'}}
            source={require('../../../assets/logos_mastercard.png')}
          />
        </View>
        <Text style={{color: 'white'}}>$34.99</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{color: 'white', marginTop: 50, fontSize: 9}}>
              Auto Renew after 1 month
            </Text>
            <Text style={{color: 'white', fontSize: 8}}>25 days left</Text>
          </View>
          <Button
            mode="contained"
            compact={true}
            theme={{roundness: 15, colors: {primary: 'white'}}}
            style={{marginLeft: 150, marginTop: 50, height: 30}}>
            <Text style={{fontSize: 10, color: 'red'}}>cancle</Text>
          </Button>
        </View>
      </View>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Packages</Text>
      </View>

      {/* divisions for me  */}

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
              {'  View all property information'}
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
            theme={{roundness: 15, colors: {primary: 'rgba(15, 195, 140, 1)'}}}
            style={{marginLeft: 50, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: 'white'}}>Start Now</Text>
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
              {'  View all Property Information'}
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
            theme={{roundness: 15, colors: {primary: 'white'}}}
            style={{marginLeft: 60, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: 'red'}}>Cancle</Text>
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
              {'  View all Property Information'}
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
            onPress={() => navigate('Payments')}
            compact={true}
            theme={{roundness: 15, colors: {primary: 'rgba(15, 195, 140, 1)'}}}
            style={{marginLeft: 50, marginTop: 80, height: 30}}>
            <Text style={{fontSize: 10, color: 'white'}}>Start Now</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Memberships;
