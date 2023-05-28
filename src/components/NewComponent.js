import { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({title, image, duration, star}) => {
    const [loaded, setLoaded] = useState(false);
    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../fonts/Poppins-SemiBold.ttf'),
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
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image onLoadEnd={()=>{setLoaded(true)}} style={styles.image} source={image}>
            </Image>
            {!loaded && <ActivityIndicator style={styles.loading}></ActivityIndicator>}
            </View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.bottom}>
                <Text>
                    {duration}
                </Text>
                
                <Text>
                    {star}
                    <Icon color="#FFD233" size={15} name='star'></Icon>
                </Text>
            </View>
            <View
            style={styles.play}
            >
                <TouchableOpacity>
                    <Icon size={37} name='play-circle'></Icon>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        width: 227,
        height: 241,
        backgroundColor: "white",
        marginRight: 32
    },
    text:{
        fontFamily: "Poppins-SemiBold",
        fontSize: 15,
        fontWeight: "600",
        marginLeft: 10,
        marginTop: 5
    },
    imageContainer:{
        resizeMode: "cover",
        height: 150,
    },
    image: {
        resizeMode: "cover",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: "100%",
        width: "100%"
    },
    loading:{
        position: "absolute",
        alignSelf: "center",
        top: "50%",
    },
    bottom:{
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 10,
        paddingBottom: 15,
        alignItems: "flex-end",
    },
    play:{
        position: "absolute",
        width: "100%",
        bottom: 5,
        alignItems: "center"
    }
});
