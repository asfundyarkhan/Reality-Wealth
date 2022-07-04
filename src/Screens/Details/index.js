import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.grayContainer}>
            <Text style={styles.text}>
              want to see the images and more information about
            </Text>
            <Text style={styles.text}>this property ?</Text>
            <Text style={styles.textTitle}>Upgrade to Pro</Text>
          </View>
          <View style={styles.containerFlatList}>
            <View style={styles.smallContainer}>
              <Pressable style={styles.icon}>
                <Image source={require('../../../assets/heartIcon.png')} />
              </Pressable>
              <Text style={styles.textTitleCard}>
                {'Title Location/property'}
              </Text>
              <Text style={styles.commentCard}>city</Text>
            </View>
          </View>

          {/* #Title to low text diveder */}

          <View style={styles.containerGraytList}>
            <View style={styles.smallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>
                <Image
                  style={{marginRight: 8}}
                  source={require('../../../assets/VectorIcon.png')}
                />{' '}
                {'Bedrooms'}
              </Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
          </View>
          <View style={styles.containerGraytList}>
            <View style={styles.smallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>
                <Image
                  style={{marginRight: 8}}
                  source={require('../../../assets/VectorIcon.png')}
                />{' '}
                {'Bedrooms'}
              </Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
          </View>
          <View style={styles.containerGraytList}>
            <View style={styles.smallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>
                <Image
                  style={{marginRight: 8}}
                  source={require('../../../assets/VectorIcon.png')}
                />{' '}
                {'Bedrooms'}
              </Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
          </View>
          <View style={styles.containerGraytList}>
            <View style={styles.verySmallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>Bedrooms</Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
            <View style={styles.verySmallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>Bedrooms</Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
          </View>
          <View style={styles.containerGraytList}>
            <View style={styles.verySmallGrayContainer}>
              <Text style={styles.textTitleGrayCard}>Bedrooms</Text>
              <Text style={styles.timeGrayStamp}>1</Text>
            </View>
            <View style={styles.verySmallGrayContainer1}></View>
          </View>
          <View style={styles.containerGraytList}>
            <View style={styles.verySmallGrayContainer1}>
              <Text style={styles.textTitleGrayCard}>
                want to calculate monthly mortage payments ?
              </Text>
            </View>
            <View style={styles.verySmallGrayContainer2}>
              <Pressable
                onPress={() => {
                  navigate('MortageCalculator');
                }}
                style={{alignItems: 'center'}}>
                <Text style={styles.buttonText}>calculate</Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              marginTop: '8%',
              marginHorizontal: '5%',
            }}>
            <Text style={styles.textBottom}>
              want to see adress and more information about the property?
            </Text>
            <Text style={styles.titleTextBottom}>Upgrade to Pro</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
