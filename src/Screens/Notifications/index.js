import {Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Appbar} from 'react-native-paper';

const NotificationScreen = ({navigation}) => {
  const [data, setData] = useState([
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
    {
      title: 'HEADER',
      text: 'Notification Text',
      createdAt: 'Time',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <Appbar style={{backgroundColor: '#fff', zIndex: 10}}>
        <Appbar.Action
          icon="arrow-left"
          color="black"
          onPress={() => {
            console.log('menu should be open');
          }}
        />
        <Appbar.Content title="Notifications" style={{marginLeft: 55}} />
      </Appbar>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View style={styles.containerFlatList}>
            <View style={styles.smallContainer}>
              <Text style={styles.textTitle}>{item.title} </Text>
              <Text style={styles.comment}>{item.text}</Text>
              <Text style={styles.timeStamp}> {item.createdAt}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;
