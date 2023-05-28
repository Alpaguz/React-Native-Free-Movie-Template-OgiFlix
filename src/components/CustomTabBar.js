import { View, StyleSheet, Text, Dimensions, Touchable, TouchableOpacity, Animated, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomSearchButton from './CustomSearchButton';
import { useRef } from "react";

const Data = [
    {
        "icon": "home", 
        "navigate": "Home"
    },
    {
        "icon": "save",
        "navigate": "Favorites"
    },
    {
        "navigate": "Search"
    },
    {
        "icon": "notifications",
        "navigate": "Notifications"
    },
    {
        "icon": "settings",
        "navigate": "Settings"
    },
]

var currentIndex = -1;
var currentNavigation;

export default ({ state, descriptors, navigation})=>{
    const ref = useRef(null);
    currentIndex = state.index;
    currentNavigation = navigation;
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.panel}>
                {
                    state.routes.map((route, index)=>{
                        return (<Normal refm={ref} key={index} index={index}></Normal>);
                    })
                }
            </View>
        </View>
        </SafeAreaView>
    );
};

const Normal = ({index, refm})=>{
    const onPress = ()=>{
        Navigate(Data[index].navigate);
        refm.current.Toggle(index == 2);
    };
    if(index == 2){
        return (
            <CustomSearchButton onPress={onPress} ref={refm}></CustomSearchButton>
        );
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon color="#00425A" size={30} name={Data[index].icon + (currentIndex == index ? "-outline" : "")}></Icon>
        </TouchableOpacity>
    );
};

const Navigate = (nav) => {
    currentNavigation.navigate(nav);
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        padding: 20,
        flexDirection: "row"
    },
    panel:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    }
});