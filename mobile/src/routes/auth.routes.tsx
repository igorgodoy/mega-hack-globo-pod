import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import UpdatePassword from '../pages/UpdatePassword';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name="LogIn" component={LogIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
    <Auth.Screen name="UpdatePassword" component={UpdatePassword} />
  </Auth.Navigator>
);

export default AuthRoutes;
