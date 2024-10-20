import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
})