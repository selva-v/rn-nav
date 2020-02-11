import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import NewRequest from '../screens/NewRequest';
import ViewRequest from '../screens/ViewRequest';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'Home') {
            iconName = 'ios-home'
          } else if(route.name === 'New Request') {
            iconName = 'ios-add-circle'
          } else if (route.name === 'View Request') {
            iconName = 'ios-open'
          } else if (route.name === 'Logout') {
            iconName = 'ios-power'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#d0021b',
        inactiveTintColor: '#0967a1',
      }}
    >
      <Tab.Screen name='Home' component={Dashboard} />
      <Tab.Screen name="New Request" component={NewRequest} />
      <Tab.Screen name="View Request" component={ViewRequest} />
    </Tab.Navigator>
  )
}

export default AppNavigator;