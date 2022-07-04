import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TextInput, Icon} from 'react-native-paper';

const GrayInputs = ({
  name,
  onFocus,
  pass,
  onchangeText,
  icon,
  value,
  placeholderColor,
}) => {
  return (
    <TextInput
      theme={{
        roundness: 15,
        fonts: '600',
        BackgroundColor: 'gray',
      }}
      style={{paddingLeft: '1%', borderRadius: 15}}
      mode="flat"
      placeholder={name}
      placeholderTextColor={placeholderColor}
      value={value}
      onFocus={onFocus}
      //inputTextStyle={styles.container}
      //inputContainerStyle={styles.inputContainer}
      // inputStyle={styles.inputText}
      secureTextEntry={pass}
      onChangeText={onchangeText}
    />
  );
};

export default GrayInputs;
