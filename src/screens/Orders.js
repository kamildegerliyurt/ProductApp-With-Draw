import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.ordersContainer}>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  ordersContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})