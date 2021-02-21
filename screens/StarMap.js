import React, { Component } from 'react';
import { Text, View,TextInput,StyleSheet,Platform, StatusBar,SafeAreaView,ImageBackgrounda, ImageBackground} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor(){
        super()
        this.state={
          longitude: '',
          latitude: ''
        }
      }
    render() {
        const { longitude, latitude } = this.state;
        const path =`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
        return (
        <View style={{flex:1}}>      
         <SafeAreaView style={styles.droidSafeArea} />
         <ImageBackground
            source={require('../assets/stars.gif')} style={styles.backgroundImage}>


          <View style={{flex:0.25,marginTop:20, alignItems:'center'}}>
            <Text style={styles.titleText}>Stars Map</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your longitude"
            placeholderTextColor = "white"
            onChangeText={(text)=>{
              this.setState({
                longitude: text
              })
            }}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your latitude"
            placeholderTextColor = "white"
            onChangeText={(text)=>{
              this.setState({
                latitude: text
              })
            }}
          />

          </View>
        
          <WebView 
            scalesPageToFit={true}
            source={{uri: path}}
            style={{ marginTop: 20,marginBottom:20, }}
            />

            </ImageBackground>
          </View>

          );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
},
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
},
backgroundImage: {
  flex: 1,
  resizeMode: 'cover',
},
titleText:{
  fontSize: 25,
  fontWeight: "bold",
  color: "white",
  justifyContent:"center",
  alignContent:"center",     
},
inputStyle:{
  height: 40, 
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius:20,
  marginTop:20,
  marginRight:20,
  marginLeft:20,
  textAlign:'center',
  color:'white',
  height:30,
  width:200
}
})