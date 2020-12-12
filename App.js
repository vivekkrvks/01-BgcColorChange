
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {

  const [randomColor, setRandomColor] = useState('rgb(32,0,126)')
  const [brandomColor, setbRandomColor] = useState("#BB2CD9")


  const changeBg = () => {
    setbRandomColor(randomColor)
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    
    setRandomColor(color)
  }
  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container,{ backgroundColor:randomColor}]}>
    <TouchableOpacity onPress={changeBg}>
    <Text style={[styles.text,{ backgroundColor:brandomColor}]}>Tap Me</Text>
    </TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center', // from right to left
    justifyContent:'center'

  },
  text:{
    fontSize:30,
   
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  }
})