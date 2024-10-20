import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={styles.messageContainer}>
      <Text>Message</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  messageContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})