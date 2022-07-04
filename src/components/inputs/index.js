import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TextInput, Icon} from 'react-native-paper';

const Inputs = ({
  name,
  onFocus,
  pass,
  onchangeText,
  icon,
  value,
  placeholderColor,
}) => {
  // const [isFocus, setIsFocus] = useState(false);
  // const onFocusChange = () => {
  //   setIsFocus(!isFocus);
  // };

  // theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}

  return (
    <TextInput
      theme={{
        colors: 'white',
        roundness: 10,
        fonts: '600',
        BackgroundColor: '#fff',
      }}
      style={{paddingLeft: '1%'}}
      mode="outlined"
      outlineColor="gray"
      placeholder={name}
      placeholderTextColor={placeholderColor}
      value={value}
      onFocus={onFocus}
      // inputTextStyle = {styles.container}
      // inputContainerStyle={styles.inputContainer}
      // inputStyle={styles.inputText}
      secureTextEntry={pass}
      onChangeText={onchangeText}
      //right={<TextInput.Icon name={value ? icon : ''} color="green" />}
    />
  );
};

export default Inputs;
