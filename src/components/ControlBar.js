import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default ()=>{
    const [fontsLoaded] = useFonts({
        'RubikPuddles-Regular': require('../fonts/RubikPuddles-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.roundProfileImage} source={
            require('../images/profile.png')
        }></Image>
        <Text style={styles.text}>OGİFLİX</Text>
        <TouchableOpacity style={styles.download}>
            <Icon size={20} name="cloud-download-outline"></Icon>
            <View style={styles.notify}>
                <Text style={styles.text2}>4</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        paddingTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F0EEED",
        marginBottom: 20
    },
    roundProfileImage:{
        width: 43,
        height: 43
    },
    download:{
        borderWidth: 1,
        borderRadius: 180,
        width: 43,
        height: 43,
        justifyContent: "center",
        alignItems: "center"
    },
    notify:{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 180,
        width: 14,
        height: 14,
        left: -2,
        top: 0
    },
    text:{
        fontSize: 30,
        fontFamily: "RubikPuddles-Regular"
    },
    text2:{
        color: "white",
        fontSize: 10,
        alignSelf: 'center'
    }
});