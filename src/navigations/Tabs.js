import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>

      <Tab.Screen name='ProductList' 
                  component={ProductList} 
                  options={{tabBarIcon:({focused})=>(<Entypo name="home" 
                                                             size={24} 
                                                             color={focused ? "tomato" : "gray"}/>)}}/>



      <Tab.Screen name='ProductDetails' 
                  component={ProductDetails} 
                  options={{tabBarIcon:({focused})=>(<FontAwesome5 name="question" 
                                                                   size={24} 
                                                                   color={focused ? "tomato" : "gray"} />)}}/>

    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})