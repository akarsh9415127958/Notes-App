import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SignUp extends React.Component {
    render(){
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("./assets/images/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg")}
          resizeMode="stretch"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.iconRow}>
            <Icon
              name="american-sign-language-interpreting"
              style={styles.icon}
            ></Icon>
            <Text style={styles.signIn}>SignIn</Text>
          </View>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}>
            <Text style={styles.signIn2}>SignIn</Text>
          </View>
        </View>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute",
    flexDirection: "row"
  },
  image_imageStyle: {},
  icon: {
    color: "rgba(214,241,33,1)",
    fontSize: 40,
    height: 40,
    width: 51,
    marginTop: 5
  },
  signIn: {
    
    color: "rgba(251,243,243,1)",
    height: 45,
    width: 220,
    fontSize: 50,
    marginLeft: 44
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 36,
    marginLeft: 24,
    marginTop: 34
  },
  rect: {
    top: 296,
    left: 0,
    width: 375,
    height: 525,
    position: "absolute",
    backgroundColor: "rgba(119,116,116,0.74)",
    borderRadius: 41
  },
  rect2: {
    width: 253,
    height: 65,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    opacity: 0.69,
    marginTop: 110,
    marginLeft: 60
  },
  rect3: {
    width: 253,
    height: 61,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    opacity: 0.69,
    marginTop: 40,
    marginLeft: 60
  },
  rect4: {
    width: 135,
    height: 57,
    backgroundColor: "rgba(71,226,171,1)",
    borderBottomRightRadius: 28,
    borderTopLeftRadius: 28,
    marginTop: 56,
    marginLeft: 119
  },
  signIn2: {
   
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 36
  },
  imageStack: {
    width: 375,
    height: 821
  }
});


