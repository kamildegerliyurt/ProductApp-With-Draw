import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Faqs = () => {
  return (
    <View style={styles.faqsContainer}>
      <Text>Faqs</Text>
    </View>
  )
}

export default Faqs

const styles = StyleSheet.create({
  faqsContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})