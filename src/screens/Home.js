import {StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
      <View style={styles.homeContainer}>
        <Text>Home</Text>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})