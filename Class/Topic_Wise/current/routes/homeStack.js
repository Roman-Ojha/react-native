import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import {NavigationContainer} from '@react-navigation/native';

const HomeStack = createStackNavigator();
function MyHomeStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'GameZone',
        }}
      />
      <HomeStack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{
          title: 'Review Details',
        }}
      />
    </HomeStack.Navigator>
  );
}

export default MyHomeStack;
