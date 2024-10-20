import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import {Home, 
        Message,
        Orders, 
        Profile,
        Search,
        Address,
        Faqs,
        Favourite,
        Notifications,
        PaymentMethod,
      } from "../screens/index"


import Tabs from './Tabs';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
         drawerContent={
             (props)=>{
                  return(
                     <SafeAreaView>
                        <View style={{height:200, width:"100%", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                          <Image source={require("../../assets/ProfilePicture.png")}
                                 style={{width:100, height:100, borderRadius:999, marginBottom:12,}}/>
                          <Text style={{fontSize:18, fontWeight:"bold", color:"black", marginBottom:6}}>Kamil Değerliyurt</Text>
                          <Text style={{fontSize:16, color:"black", }}>React Native Mobile Developer</Text>
                        </View>
                        <DrawerItemList {...props}/>
                      </SafeAreaView>
                          )
                        }
                      }
      
                       initialRouteName="Tabs"
                       screenOptions={{
                        drawerStyle: { backgroundColor: '#fff', width: 250 },
                        headerStyle: { backgroundColor: '#f4511e' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                        drawerActiveTintColor: 'blue',
                        drawerLabelStyle: { color: '#111' },
                      }}>

          <Drawer.Screen name="Tabs" component={Tabs} />
          {/* <Drawer.Screen name="Home" component={Home} /> */}
          {/* <Drawer.Screen name="Message" component={Message} /> */}
          {/* <Drawer.Screen name="Orders" component={Orders} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Search" component={Search} /> */}
          <Drawer.Screen name="Address" component={Address} />
          <Drawer.Screen name="Faqs" component={Faqs} />
          <Drawer.Screen name="Favourite" component={Favourite} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="PaymentMethod" component={PaymentMethod} /> 

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Draw

const styles = StyleSheet.create({})