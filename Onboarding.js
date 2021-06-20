import { styleSheets } from 'min-document';
import React from 'react';
import { StyleSheet,View,Text,Image,TextInput,StatusBar,Dimensions,TouchableOpacity,Alert,Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';

const {width,height} = Dimensions.get('window');
export default class Onboarding extends React.Component{


 render(){
return(
<View style = {styles.container}>
<Swiper autoplay
showsButtons = {true}
>
    <View style = {styles.slide}>
    <Image style = {styles.image} source = {require('./assets/pexels-lucy-7396027.jpg')}/>
    </View>
    <View style = {styles.slide}>
    <Image style = {styles.image} source = {require('./assets/pexels-valeriya-kobzar-8177283.jpg')}/>
    </View>
    <View style = {styles.slide}>
    <Image style = {styles.image} source = {require('./assets/pexels-yeş-8205218.jpg')}/>
    </View>
</Swiper>
<View style = {styles.buttonContainer}>
    <TouchableOpacity  onPress={() => this.props.navigation.navigate('LoginScreen')}>
    <View style = {styles.signupConatiner}>
        <Text style = {styles.signup}>SignUp</Text>
    </View></TouchableOpacity>
    <View style = {styles.loginConatiner}>
        <Text style = {styles.login}>login</Text>
    </View>
</View>
<StatusBar hidden = {false}/>
</View>
        )
    }
}
const styles = StyleSheet.create({
   buttonContainer:{
       position:'absolute',
       bottom:70,
       width:370,
       height:60,
       marginLeft:10,
alignItems:'center',
flexDirection:'row',
justifyContent:'space-between',

       },
       signupConatiner:{
           width:180,
           height:60,
           borderColor:'#FFFFFF',
        borderWidth:2,
           borderRadius:30,
           alignItems:'center',
           justifyContent:'center',

       },
       signup:{
fontSize:20,
color:'black',
fontWeight:'bold',

       },
       login:{fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    container:{
        flex:1
    },
    image:{
        width:width,
        height:height,
    },
    slide:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    loginConatiner:{
        width:180,
        height:60,
       
        borderRadius:30,
        borderColor:'#FFFFFF',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        fontSize: 65,
        fontWeight: '300',
        paddingBottom: 40,
        color: '#ff3d00',
      },
      loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        color: 'lime',
      },
      KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: 'aqua',
        margin: 50,
      },
      modalContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80,
      },
      formTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: 'green',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        color: 'aqua',
      },
      registerButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
      },
      registerButtonText: {
        color: '#ff5722',
        fontSize: 15,
        fontWeight: 'bold',
      },
      cancelButton: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
    
      button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,
        backgroundColor: '#ff9800',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
      },
    
      buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20,
      },
      imageContainer: {
        flex: 0.75,
        width: '40%',
        height: '20%',
        marginLeft: 20,
        marginTop: 30,
        borderRadius: 40,
      },
    
    
})