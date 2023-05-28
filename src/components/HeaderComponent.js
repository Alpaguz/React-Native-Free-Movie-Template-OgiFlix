import { useState } from "react";
import { View, Image, StyleSheet, ImageBackground, Touchable, TouchableOpacity, ActivityIndicator} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default ()=>{

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/Luca.png')}></Image>
            <Image style={styles.image2} source={require('../images/LucaText.png')}></Image>
            <TouchableOpacity style={styles.icon}>
                <Icon size={46} color="white" name="play-circle"></Icon>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 180,
        marginHorizontal: 25,
        backgroundColor: "#00425A"
    },
    icon:{
        left: 21,
        bottom: 14,
        position: "absolute"
    },
    image:{
        right: 24,
        bottom: 0,
        position: "absolute"
    },
    image2:{
        top: 3,
        position: "absolute"
    }
});
