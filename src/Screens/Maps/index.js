import {SafeAreaView, View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import styles from './styles';
import {FAB, Searchbar, Surface, Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const [radius, setRadius] = useState(0);
  const [sourcePath, setSourcePath] = useState(
    require('../../../assets/location.png'),
  );
  const onSourceChange = (sourcePath, radius) => {
    setSourcePath(null);
    setRadius(1000);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const {navigate} = useNavigation();
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Appbar style={{backgroundColor: '#fff', zIndex: 10}}>
        <Appbar.Action
          icon="menu"
          color="black"
          onPress={() => {
            console.log('menu should be open');
          }}
        />
        <Image
          source={require('../../../assets/topLogo.png')}
          style={styles.logo}
        />
      </Appbar>
      <Searchbar
        placeholder="Search Location"
        onChangeText={onChangeSearch}
        placeholderTextColor="green"
        value={searchQuery}
        style={styles.searchBar}
      />
      <Surface style={styles.surface} elevation={4}>
        <Pressable
          onPress={() => {
            console.log('clicked');
          }}>
          <Image source={require('../../../assets/homeIcon.png')} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigate('Settings');
          }}>
          <Image source={require('../../../assets/settingIcon.png')} />
        </Pressable>
      </Surface>
      <FAB
        icon="filter"
        color="green"
        style={styles.fab}
        onPress={() => {
          navigate('Filters');
        }}></FAB>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}>
        <Circle
          center={{latitude: 37.8030244, longitude: -122.4351431}}
          radius={radius}
          fillColor="rgba(255,219,148,0.3)"
          strokeWidth={0}
        />
        <Marker
          onPress={onSourceChange}
          coordinate={{latitude: 37.8030244, longitude: -122.4351431}}>
          <Image source={sourcePath} />
          <Callout
            tooltip={true}
            onPress={() => {
              navigate('Details');
            }}>
            <View style={styles.smallContainer}>
              <Text style={styles.textTitle}>{'Title of the Location'} </Text>
              <Text style={styles.comment}>{'city'}</Text>
              <Text style={styles.timeStamp}>
                {' '}
                {'$999.00'}{' '}
                <Pressable onPress={() => {}}>
                  <Text style={styles.details}>View Details</Text>
                </Pressable>
              </Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{latitude: 37.7900212, longitude: -122.42515132}}
          title={'Something to show'}>
          <Image source={require('../../../assets/location.png')} />
        </Marker>
        <Marker
          coordinate={{latitude: 37.7925259, longitude: -122.4651431}}
          title={'Something to show'}>
          <Image source={require('../../../assets/location.png')} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;
