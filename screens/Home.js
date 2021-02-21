// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HomeScreen extends Component {
//     render() {
//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     alignItems: "center"
//                 }}>
//                 <Text>Home Screen!</Text>
//             </View>
//         )
//     }
// }

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                 <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/main-icon.png")} style={{width:100, height:100}}></Image>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets/asset-06.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star-map.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/photo.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
        // backgroundColor:'white'
    },
    titleBar: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        // color: "white"
        color:'#D11583'
    }
});