import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View style={styles.addressContainer}>
      <Text>Address</Text>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  addressContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})