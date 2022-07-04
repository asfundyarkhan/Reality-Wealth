import React, {useContext} from 'react';
import AppStack from './navigations/AppStack';
import AuthStack from './navigations/AuthStack';
import authContext from './utility/AuthContext';

import MortageCalculator from './Screens/MortageCalculator';
import PaymentInfo from './Screens/PaymentInfo';
import Memberships from './Screens/Memberships';
import PaymentPlan from './Screens/PaymentPlan';
import Filters from './Screens/Filters';

const App = () => {
  const {isLoggedin} = useContext(authContext);

  return isLoggedin ? <AppStack /> : <AuthStack />;

  // return <PaymentInfo />;
  //return <PaymentPlan />;
  //return <Filters />;
};

export default App;
