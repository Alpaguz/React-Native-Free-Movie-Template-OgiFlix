import { Text, View, StyleSheet, FlatList } from "react-native";
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Channel from "../components/Channel";
import NewComponent from "../components/NewComponent";

const channels = [
    require('../images/disney.png'),
    require('../images/pixar.png'),
    require('../images/marvel.png'),
];

const news = [
    {
        "title": "Raya and the Last dragon",
        "image": require('../images/first.png'),
        "duration": "1h 57m",
        "star": "8.9"
    },
    {
        "title": "Luca",
        "image": require('../images/second.png'),
        "duration": "1h 57m",
        "star": "8.9"  
    }
];

export default ()=>{
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
        <View>
            <HeaderComponent></HeaderComponent>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 18,
                paddingHorizontal: 25,
            }}>
                <Text style={styles.text}>Channel</Text>
                <Text style={styles.text2}>See All</Text>
            </View>
            <FlatList
            style={styles.list}
            data={channels.map((item, index)=>{
                return {data: item, index: index};
            })}
            renderItem={({item})=><Channel image={item.data}></Channel>}
            keyExtractor={({item, index})=>index}
            horizontal= {true}
            ></FlatList>
            
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 18,
                paddingHorizontal: 25,
            }}>
                <Text style={styles.text}>New</Text>
                <Text style={styles.text2}>See All</Text>
            </View>

            <FlatList
            style={styles.list}
            data={news.map((item, index)=>{
                return {item: item, index: index};
            })}
            renderItem={({item})=><NewComponent title={item.item.title} image={item.item.image} duration={item.item.duration} star={item.item.star}></NewComponent>}
            keyExtractor={({index})=>index}
            horizontal= {true}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
    },
    text2:{
        fontSize: 15,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold"
    },
    list:{
        marginHorizontal: 14,
        marginTop: 10,
        paddingBottom: 15,
    }
});