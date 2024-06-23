import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';

const Welcome = ({ navigation }) => {
  //------------------------------------------------------    
  const [isPlaying, setIsPlaying] = useState(false);
  //------------------------------------------------------
  const triggerConfetti = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      navigation.navigate('ProductList');
    }, 1000); 
  };
  //------------------------------------------------------

  return (
    <View style={styles.welcomePageContainer}>
      <Pressable style={styles.button} onPress={triggerConfetti}>
        <Image 
          source={require('../../assets/imageconfi.png')}
          style={styles.buttonImage}
        />
      </Pressable>
      {isPlaying && (
        <LottieView
          source={require('../../assets/confeti.json')}
          autoPlay
          loop={false}
          style={styles.lottie}
          onAnimationFinish={() => setIsPlaying(false)}
        />
      )}
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomePageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems:"center",
    justifyContent:"center",
  },
  buttonImage: {
    width: 100, // Adjust the width as per your image size
    height: 100, // Adjust the height as per your image size
    resizeMode: 'contain', // Adjust the resizeMode as needed
    alignItems:"center",
    justifyContent:"center",
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});
