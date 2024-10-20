import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})