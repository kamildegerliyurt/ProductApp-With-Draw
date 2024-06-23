import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Contact from '../screens/Contact';
import Tabs from './Tabs';

import Welcome from '../screens/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
                        drawerStyle: { backgroundColor: '#fff', width: 250 },
                        headerStyle: { backgroundColor: '#f4511e' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                        drawerActiveTintColor: 'blue',
                        drawerLabelStyle: { color: '#111' },
                      }}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="ProductList" component={Tabs} />
        <Drawer.Screen name="Contact" component={Contact} />
        {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Draw

const styles = StyleSheet.create({})