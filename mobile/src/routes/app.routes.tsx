import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Interests from '../pages/Interests';
import Dashboard from '../pages/Dashboard';
import LiveProg from '../pages/LiveProg';
import MovieMain from '../pages/MovieMain';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="Interests" component={Interests} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="LiveProg" component={LiveProg} />
    <App.Screen name="MovieMain" component={MovieMain} />
  </App.Navigator>
);

export default AppRoutes;
