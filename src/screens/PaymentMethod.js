import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentMethod = () => {
  return (
    <View style={styles.paymentMethodContainer}>
      <Text>PaymentMethod</Text>
    </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
  paymentMethodContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})