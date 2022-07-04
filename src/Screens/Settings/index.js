import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Contact Details</Text>
        <Text>Edit Profile</Text>
      </View>
      {/* / */}
      <View style={styles.idContainer}>
        <View style={styles.profileView}>
          <Avatar.Image
            size={40}
            source={require('../../../assets/avatar.png')}
          />
          <Text style={styles.textTitleCard}>{'  Jhone DOE'}</Text>
        </View>
        <Text style={styles.subTitle}>{'Free'}</Text>
        <Pressable
          onPress={() => {
            navigate('Memberships');
          }}>
          <Text style={styles.greenButton}>
            <Image source={require('../../../assets/dimond.png')} />
            {'Upgrade To Pro'}
          </Text>
        </Pressable>
      </View>
      {/* / */}
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Subscription</Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Pressable
          onPress={() => {
            navigate('PaymentPlan');
          }}>
          <Text style={styles.textTitleGrayCard}>
            <Image
              style={{marginRight: 8}}
              source={require('../../../assets/dollarIcon.png')}
            />
            {'   '}
            {'Monthly'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>App Settings</Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Pressable
          onPress={() => {
            navigate('Notifications');
          }}>
          <Text style={styles.textTitleGrayCard}>
            <Image
              style={{marginRight: 8}}
              source={require('../../../assets/bellIcon.png')}
            />
            {'   '}
            {'Notification Settings'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Security Settings</Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Text style={styles.textTitleGrayCard}>
          <Image
            style={{marginRight: 8}}
            source={require('../../../assets/lockIcon.png')}
          />
          {'   '}
          {'Change Password'}
        </Text>
      </View>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>Account Connected</Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Text style={styles.textTitleGrayCard}>
          <Image
            style={{marginRight: 8}}
            source={require('../../../assets/googleIcon.png')}
          />
          {'   '}
          {'Account Connected'}
        </Text>
      </View>
      <View style={styles.greenContainer}>
        <Text style={styles.text}>General Settings</Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Text style={styles.textTitleGrayCard}>
          <Image
            style={{marginRight: 8}}
            source={require('../../../assets/questionIcon.png')}
          />
          {'   '}
          {'Help'}
        </Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Text style={styles.textTitleGrayCard}>
          <Image
            style={{marginRight: 8}}
            source={require('../../../assets/questionIcon.png')}
          />
          {'   '}
          {'Monthly'}
        </Text>
      </View>
      <View style={styles.smallGrayContainer}>
        <Text style={styles.textTitleGrayCard}>
          <Image
            style={{marginRight: 8}}
            source={require('../../../assets/questionIcon.png')}
          />
          {'   '}
          {'Monthly'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Settings;
