import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyleButton from '../../components/button_1';
import {useNavigation} from '@react-navigation/native';
import {Appbar, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const PaymentInfo = () => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState('');
  const [correct, setCorrect] = useState(false);

  const [card, setCard] = useState({
    value: '',
    validate: value => {
      return value.length === 16;
    },
    validated: false,
  });

  const [name, setName] = useState({
    value: '',
    validate: value => {
      return value.length >= 1;
    },
    validated: false,
  });

  const [expiry, setExpiry] = useState({
    value: '',
    validate: value => {
      return value.length === 4;
    },
    validated: false,
  });

  const [cvv, setCvv] = useState({
    value: '',
    validate: value => {
      return value.length === 3;
    },
    validated: false,
  });

  const correctInput = () => {};

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
        <Image
          style={styles.image}
          source={require('../../../assets/card.png')}
        />
        <Text style={styles.text}> Card number</Text>
        <TextInput
          value={card.value}
          maxLength={16}
          placeholder="0000 0000 0000 0000"
          onChangeText={value => {
            setCard({...card, value, validated: card.validate(value)});
          }}
          style={
            card.validated
              ? [styles.smallGrayContainer, styles.textFieldColor]
              : styles.smallGrayContainer
          }
        />
        <Text style={styles.text}> Cardholder name</Text>
        <TextInput
          placeholder="ex.Jhone Paul Ive"
          onChangeText={value => {
            setName({...name, value, validated: name.validate(value)});
          }}
          style={
            name.validated
              ? [styles.smallGrayContainer, styles.textFieldColor]
              : styles.smallGrayContainer
          }
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.verySmallGrayContainer}>
            <Text style={styles.text}> Expiry date</Text>
            <TextInput
              maxLength={4}
              placeholder="MM / YY"
              style={
                expiry.validated
                  ? [styles.textInputContainer, styles.textFieldColor]
                  : styles.textInputContainer
              }
              onChangeText={value => {
                setExpiry({
                  ...expiry,
                  value,
                  validated: expiry.validate(value),
                });
              }}
            />
          </View>
          <View style={styles.verySmallGrayContainer}>
            <Text style={styles.text}>CVV / CVC</Text>
            <TextInput
              maxLength={3}
              placeholder="915"
              style={
                cvv.validated
                  ? [styles.textInputContainer, styles.textFieldColor]
                  : styles.textInputContainer
              }
              onChangeText={value => {
                setCvv({...cvv, value, validated: cvv.validate(value)});
              }}
            />
          </View>
        </View>
        <Text style={styles.text}>Have Promo ?</Text>
        <TextInput style={styles.smallGrayContainer} />
        <Button
          icon="lock"
          mode="contained"
          theme={{
            roundness: 20,
            colors: {primary: '#25D482'},
          }}
          onPress={() => console.log('Pressed')}
          style={styles.button}>
          Pay for the Pro
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default PaymentInfo;
