import React, { Component } from 'react';
import { Text, View ,Alert,FlatList,Image,ImageBackground,StyleSheet, SafeAreaView,Platform, StatusBar} from 'react-native';

import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: []
        };
    }

componentDidMount(){
    this.getData()
    
}

getData=()=>{
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response => {
                
                this.setState({ aircrafts: response.data.results })
                
            })
            .catch(error => {
                console.log(error.message)
            })
    
}




renderItem = ({item}) =>{
    return(
        <View style={styles.contentCard}>
            <Image
            source={{uri: item.agency.image_url}} style={styles.itemImage}></Image>
        <Text style={{fontWeight:'bold', fontSize:20,color:'purple'}}>{item.name}</Text>
        <Text style={{color:'#696969'}}>{item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
        </View>
    )
}

keyExtractor = (item, index) => index.toString();

    render() {
        console.log(this.state.aircrafts.length)
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View
                    style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
                    <Text>Loading</Text>
                </View>
            )
        } else{
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <View style={{flex:0.10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.titleText}>Space Crafts</Text>
                </View>
                <View style={{flex:0.90}}>
                     <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.aircrafts}
                    renderItem={this.renderItem}
                    initialNumToRender={10}
                />
                </View>
                
               
               
                </ImageBackground>
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    contentCard:{
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        elevation:10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    itemImage:{
        width: "100%",
        height: 200,
        marginTop:1,
        marginBottom:15,
        marginLeft:10,
        marginRight:10,
        borderRadius:5
    }
})