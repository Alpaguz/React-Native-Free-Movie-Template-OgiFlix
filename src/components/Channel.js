import { StyleSheet, View, Image } from 'react-native';
export default ({image}) => {
    return (
        <View style={styles.container}>
            <Image source={image}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: 131,
        height: 61,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    }
});