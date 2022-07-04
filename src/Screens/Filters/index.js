import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FAB, Appbar, Button} from 'react-native-paper';
const Filters = () => {
  const [state, setState] = useState({});
  return (
    <View style={styles.container}>
      <Appbar style={{backgroundColor: '#fff'}}>
        <Appbar.Action
          icon="arrow-left"
          color="black"
          onPress={() => {
            console.log('menu should be open');
          }}
        />
        <Appbar.Content title="Filters" style={{marginLeft: 100}} />
      </Appbar>
      <FAB
        icon="filter"
        color="white"
        backgroundColor="green"
        style={styles.fab}
        onPress={() => {}}></FAB>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          color: 'black',
          marginTop: '5%',
          marginLeft: 30,
        }}>
        + City
      </Text>
      <TextInput
        style={styles.smallGrayContainer}
        onChangeText={value => {
          setState({...state, City: value});
        }}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.button}>
        Apply
      </Button>
    </View>
  );
};

export default Filters;
