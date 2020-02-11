import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import NewRequest from '../screens/NewRequest';
import ViewRequest from '../screens/ViewRequest';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Dashboard} />
      <Tab.Screen name="New Request" component={NewRequest} />
      <Tab.Screen name="View Request" component={ViewRequest} />
    </Tab.Navigator>
  )
}

export default AppNavigator;