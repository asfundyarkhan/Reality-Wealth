import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import styles from './styles';
import Inputs from '../../components/inputs';
import GrayInputs from '../../components/grayInputs';
import StyleButton from '../../components/button_1';
import {Appbar, Button} from 'react-native-paper';

const MortageCalcualtor = () => {
  const [state, setState] = useState({});
  const [calculated, setCalculated] = useState(null);

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
          <Appbar.Content title="Mortage Calculator" style={{marginLeft: 55}} />
        </Appbar>
        <Text style={[styles.text, {marginTop: 10}]}>Purchase Price ($)</Text>
        <TextInput
          style={styles.smallGrayContainer}
          onChangeText={value => {
            setState({...state, purchasePrice: value});
          }}
        />
        <Text style={styles.text}>Downpayment %</Text>
        <TextInput
          style={styles.smallGrayContainer}
          onChangeText={value => {
            setState({...state, downpayment: value});
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.verySmallGrayContainer}>
            <Text style={styles.text}>Rate %</Text>
            <TextInput
              style={styles.smallGrayContainer}
              onChangeText={value => {
                setState({...state, rate: value});
              }}
            />
          </View>
          <View style={styles.verySmallGrayContainer}>
            <Text style={styles.text}>Ammortization</Text>
            <TextInput
              style={styles.smallGrayContainer}
              onChangeText={value => {
                setState({...state, ammortization: value});
              }}
            />
          </View>
        </View>
        {!calculated ? (
          <StyleButton
            type="primary"
            content={'Calculate'}
            onPress={() => {
              setCalculated(true);
            }}
          />
        ) : (
          <View>
            <Text style={{color: '#E0E0E0'}}>
              -------------------------------------------------------------------------------------------------
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  height: '50%',
                  width: '40%',
                  alignItems: 'center',
                  backgroundColor: '#C6FFE4',
                  justifyContent: 'center',
                  borderRadius: 16,
                }}>
                <Text>Total Mortage</Text>
                <Text>$31212300</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View>
                <Text>Monthly</Text>
                <View
                  style={{
                    display: 'flex',
                    height: 60,
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: '#C6FFE4',
                    justifyContent: 'center',
                    borderRadius: 16,
                  }}>
                  <Text>$31212300</Text>
                </View>
              </View>
              <View>
                <Text>Downpayment</Text>
                <View
                  style={{
                    display: 'flex',
                    height: 60,
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: '#C6FFE4',
                    justifyContent: 'center',
                    borderRadius: 16,
                  }}>
                  <Text>$31212300</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MortageCalcualtor;
