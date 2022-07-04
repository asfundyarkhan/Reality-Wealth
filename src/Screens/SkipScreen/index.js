import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import StyleButton from '../../components/button_1/index';
import {Button, Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-vector-icons';

const SkipScreen = () => {
  const {navigate} = useNavigation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [items, setItems] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Appbar style={{backgroundColor: '#fff', zIndex: 10}}>
          <Appbar.Content title="Skip" style={{marginLeft: 271}} />
          <Appbar.Action
            icon="chevron-right"
            color="black"
            onPress={() => {
              console.log('menu should be open');
            }}
          />
        </Appbar>
        <View style={styles.spacerStyle} />
        <DropDownPicker
          placeholder="are you currently working with a reactor"
          dropDownContainerStyle={{
            backgroundColor: '#DFDFDF',
            width: '90%',
            marginLeft: '5%',
            zIndex: 999999,
          }}
          selectedItemLabelStyle={{
            color: 'green',
          }}
          labelStyle={{color: 'green'}}
          //   onSelectItem={() => (setColor = 'green')}
          itemSeparator={true}
          placeholderStyle={{fontWeight: '600'}}
          open={open1}
          value={value1}
          items={items}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems}
          style={styles.dropDownContainer}
        />
        <View style={styles.spacerStyle} />
        <DropDownPicker
          placeholder="Are You A Real Estate Agent"
          placeholderStyle={{fontWeight: '600'}}
          dropDownContainerStyle={{
            backgroundColor: '#DFDFDF',
            width: '90%',
            marginLeft: '5%',
            zIndex: 999999,
          }}
          selectedItemLabelStyle={{
            color: 'green',
          }}
          labelStyle={{color: 'green'}}
          open={open2}
          value={value2}
          items={items}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems}
          style={styles.dropDownContainer}
        />
        <View style={styles.spacerStyle} />
        <DropDownPicker
          placeholder="Are You An Investor"
          placeholderStyle={{fontWeight: '600'}}
          dropDownContainerStyle={{
            backgroundColor: '#DFDFDF',
            width: '90%',
            marginLeft: '5%',
            zIndex: 999999,
          }}
          selectedItemLabelStyle={{
            color: 'green',
          }}
          labelStyle={{color: 'green'}}
          open={open3}
          badgeColors="green"
          value={value3}
          items={items}
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems}
          style={styles.dropDownContainer}
        />
        <View style={styles.spacerStyle} />
        <DropDownPicker
          onSelectItem={() => {}}
          placeholder="Why Did You Sign Up"
          placeholderStyle={{fontWeight: '600'}}
          dropDownContainerStyle={{
            backgroundColor: '#DFDFDF',
            width: '90%',
            marginLeft: '5%',
            zIndex: 999999,
            borderWidth: 0,
          }}
          selectedItemLabelStyle={{
            color: 'green',
          }}
          labelStyle={{color: 'green'}}
          open={open4}
          value={value4}
          items={items}
          setOpen={setOpen4}
          setValue={setValue4}
          setItems={setItems}
          style={[
            styles.dropDownContainer,
            {backgroundColor: open4 ? '#DFDFDF' : null},
          ]}
          arrowIconStyle={{backfaceVisibility: 'visible'}}
        />
        <View style={{marginTop: '40%'}}>
          <Text style={styles.text}>
            do you want 360 reality wealth to send you info from time to time,
            promotion,and free hidden gems and free aditional investor info ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: '10%',
              marginTop: '4%',
              paddingHorizontal: '10%',
            }}>
            <Button
              mode="outlined"
              theme={{colors: {primary: 'black'}}}
              onPress={() => console.log('Pressed')}
              style={styles.smallButton}
              labelStyle={{fontWeight: '400', fontStyle: 'normal'}}>
              No
            </Button>
            <Button
              mode="outlined"
              theme={{colors: {primary: 'black'}}}
              onPress={() => {}}
              style={styles.smallButton}>
              Yes
            </Button>
          </View>
          <StyleButton
            type="primary"
            content={'Continue'}
            onPress={() => {
              navigate('Disclosure');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SkipScreen;
