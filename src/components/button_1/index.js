import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './styles';

const StyleButton = props => {
  const {type, content, onPress} = props;
  const backgroundColor = type === 'primary' ? '#007932' : 'red';
  const textColor = type === 'primary' ? 'white' : 'white';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;
