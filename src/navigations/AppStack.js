import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Maps from '../Screens/Maps';
import Settings from '../Screens/Settings';
import NotificationScreen from '../Screens/Notifications';
import Details from '../Screens/Details';
import Congradulations from '../Screens/Congradulations';
import MortageCalcualtor from '../Screens/MortageCalculator';
import PaymentInfo from '../Screens/PaymentInfo';
import PaymentPlan from '../Screens/PaymentPlan';
import Memberships from '../Screens/Memberships';
import DrawerContent from '../components/DrawerContent';
import Payments from '../Screens/Payment';
import Filters from '../Screens/Filters';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Congradulations" component={Congradulations} />
      <Stack.Screen name="MortageCalculator" component={MortageCalcualtor} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="PaymentPlan" component={PaymentPlan} />
      <Stack.Screen name="Memberships" component={Memberships} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
};

export default AppStack;
