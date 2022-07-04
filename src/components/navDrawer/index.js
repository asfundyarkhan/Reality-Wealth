import {Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Drawer, Divider} from 'react-native-paper';

const NavDrawer = () => {
  const [active, setActive] = useState('');

  return (
    <View style={styles.container}>
      <Drawer.Section title="Jhone DOE">
        <Drawer.Item
          label="Notifications"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'first'}
          onPress={() => setActive('first')}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
          style={{backgroundColor: '#007932', borderRadius: 5, width: '100%'}}
        />
        <Drawer.Item
          label="Favaourites"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'second'}
          onPress={() => setActive('second')}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
          style={{backgroundColor: '#007932', borderRadius: 5, width: '100%'}}
        />
        <Drawer.Item
          label="Sold"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'third'}
          onPress={() => setActive('third')}
          style={{
            backgroundColor: '#007932',
            borderRadius: 5,
            width: '100%',
          }}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
        />
        <Drawer.Item
          label="Contact Us"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'fourth'}
          onPress={() => setActive('fourth')}
          style={{
            backgroundColor: '#007932',
            borderRadius: 5,
            width: '100%',
          }}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
        />
        <Drawer.Item
          label="FAQ"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'fifth'}
          onPress={() => setActive('fifth')}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
          style={{backgroundColor: '#007932', borderRadius: 5, width: '100%'}}
        />
        <Drawer.Item
          label="About Us"
          theme={{colors: {primary: 'white', text: 'white'}}}
          active={active === 'sixth'}
          onPress={() => setActive('sixth')}
          right={() => (
            <Text style={{fontSize: 20, color: 'white'}}> {'>'}</Text>
          )}
          style={{backgroundColor: '#007932', borderRadius: 5, width: '100%'}}
        />
      </Drawer.Section>
    </View>
  );
};

export default NavDrawer;
