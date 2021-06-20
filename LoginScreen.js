import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Dimensions
} from "react-native";
import LottieView from 'lottie-react-native';
const {width,height} = Dimensions.get('window')
export default class LoginScreen extends React.Component{
  render(){
  return ( 
    <View style = {styles.container}>
  <ImageBackground
    source={require("./assets/images/42f8d12ac3db780d86702ed38ae52cb4.jpg")}
    style = {{width:width,height:height}}>
  <LottieView source = {require('./assets/27565-writing-an-exam.json')} autoPlay/>
    </ImageBackground>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image2: {
    top: 54,
    left: 5,
    width: 375,
    height: 812,
    position: "absolute"
  },
  image2_imageStyle: {},
  rect: {
    width: 113,
    height: 112,
    backgroundColor: "rgba(248,241,241,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 24,
    marginTop: 173,
    marginLeft: 131
  },
  n2: {
    
    color: "#121212",
    fontSize: 80,
    marginTop: 8,
    marginLeft: 28
  },
  noteApp: {
    
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    marginTop: 40,
    marginLeft: 108
  },
  rect2: {
    top: 4,
    left: 0,
    width: 333,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(214,31,31,1)",
    borderRadius: 37,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0
  },
  email: {
    
    color: "#121212",
    fontSize: 14,
    marginTop: 7,
    marginLeft: 150
  },
  placeholder: {
    top: 0,
    left: 28,
    position: "absolute",
  
    color: "#121212",
    height: 100,
    width: 289
  },
  rect2Stack: {
    width: 333,
    height: 100,
    marginTop: 34,
    marginLeft: 21
  },
  rect3: {
    top: 0,
    left: 0,
    width: 333,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(214,31,31,1)",
    borderRadius: 37,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0
  },
  password: {
    
    color: "#121212",
    marginTop: 9,
    marginLeft: 138
  },
  placeholder2: {
    top: 0,
    left: 25,
    position: "absolute",

    color: "#121212",
    height: 100,
    width: 278
  },
  rect3Stack: {
    width: 333,
    height: 100,
    marginLeft: 21
  },
  loremIpsum: {
    
    color: "rgba(31,42,215,1)",
    fontSize: 21,
    marginTop: 1
  },
  signIn: {
    
    color: "#121212",
    fontSize: 23,
    marginLeft: 11
  },
  loremIpsumRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 37,
    marginRight: 56
  },
  image3: {
    top: 0,
    left: 0,
    width: 380,
    height: 321,
    position: "absolute",
    transform: [
      {
        rotate: "180.00deg"
      }
    ]
  },
  image2Stack: {
    width: 380,
    height: 866,
    marginTop: -54,
    marginLeft: -5
  }
});


