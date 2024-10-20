import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View style={styles.favoriteContainer}>
      <Text>Favourite</Text>
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  favoriteContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})