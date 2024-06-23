import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';

const ProductDetails = ({route,navigation}) => {

//-------------------------------
const total = route.params.data
const title = total.title
const description = total.description
const price = total.price
const image = total.image
//-------------------------------
const [number, setNumber] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)
//-----------------------------------AZALT
const handleMinus = () => {
  if (number > 0) {
    setNumber(number - 1)
    setTotalPrice(totalPrice - price)
  }
}
//-----------------------------------ARTTIR
const handlePlus = () => {
  if (number < 10) {
    setNumber(number + 1)
    setTotalPrice(totalPrice + price)
  }
}
 //-----------------------------------


  return (
    <SafeAreaView style={styles.aboutContainer}>

      <View style={styles.topContainer}>
     

        <Image style={{width:100, height:100, resizeMode:"center"}}
               source={{uri: image}}/>

          <View style={styles.middleContainer}>
            <Pressable style={{ alignItems: "center", justifyContent: "center" }}
                       onPress={handleMinus}>
              <AntDesign name="minuscircleo" size={22} color="black" />
            </Pressable>


             <Text style={{ fontSize: 16, fontWeight: "bold" }}>{number}</Text>


            <Pressable style={{ alignItems: "center", justifyContent: "center" }}
                       onPress={handlePlus}>
              <AntDesign name="pluscircleo" size={22} color="black" />
            </Pressable>
          </View>

          <Text style={{textAlign:"center"}}>{title}</Text>
          <Text style={{textAlign:"center"}}>{description}</Text>
           
      </View>


      <View style={styles.downContainer}>
       <Text style={{fontSize:20, fontWeight:"bold"}}>Total Price:   {totalPrice.toFixed(2)}</Text>
      </View>



    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  aboutContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  topContainer: {
    flex:4,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",

  },
  downContainer: {
    flex:1,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
  },
  middleContainer: {
    flexDirection:"row",
    width:"20%",
    alignItems:"center",
    justifyContent: "space-between",
    marginTop:5,
  }
})