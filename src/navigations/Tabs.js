import React from 'react';
// import { View, Text } from 'react-native';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import { Marker } from 'react-native-svg';

import {Home, Message,Orders, Profile,Search} from "../screens/index"

import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';


import { BottomFabBar } from 'rn-wave-bottom-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const tabBarIcon = (IconComponent, iconName) => ({ color, size }) => (
  <IconComponent name={iconName} size={size} color={color} />
);

const Tabs = () => {

//------------------------------Colors
const DARK_ORANGE = "#f4511e"
const RED = "red"
const WHITE = "#ffffff"
const BLACK = "#000"
//------------------------------



  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: DARK_ORANGE,
        tabBarActiveBackgroundColor: DARK_ORANGE,
        tabBarInactiveBackgroundColor: RED,
        tabBarStyle: {
          backgroundColor: WHITE,
        },
      }}
      tabBar={(props) => (
        <BottomFabBar
          mode={'default'}
          isRtl={false}
          focusedButtonStyle={{
            shadowColor: BLACK,
            shadowOffset: {
              width: 0,
              height: 7,
              
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
            
          }}
          bottomBarContainerStyle={{
            bottom: 0,
            left: 0,
            right: 0,       
            
          }}
          {...props}
        />
      )}>
        
          <Tab.Screen
            options={{ tabBarIcon: tabBarIcon(Octicons, 'home') }}
            name="Home"
            component={Home}
          />


          <Tab.Screen
            options={{
              tabBarIcon: tabBarIcon(Fontisto , 'shopping-basket'),
              tabBarActiveBackgroundColor: DARK_ORANGE,
              tabBarActiveTintColor: DARK_ORANGE,
            }}
            name="Orders"
            component={Orders}
          />


          <Tab.Screen
            options={{ tabBarIcon: tabBarIcon(Fontisto, 'search') }}
            name="Search"
            component={Search}
          />


          <Tab.Screen
            options={{ tabBarIcon: tabBarIcon(AntDesign, 'message1') }}
            name="Message"
            component={Message}
          />


      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon(AntDesign, 'user') }}
        name="Profile"
        component={Profile}
      />



    </Tab.Navigator>
  );
};

export default Tabs;
