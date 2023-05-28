import Icon from "react-native-vector-icons/Ionicons";
import {TouchableOpacity, View, StyleSheet } from "react-native";
import Animated,{ useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing } from "react-native-reanimated";
import { forwardRef, useImperativeHandle } from "react";
export default forwardRef(({onPress, selected}, ref)=>{
  
  const randomWidth = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: randomWidth.value + "deg"}],
    };
  });

  const Toggle = (bool)=>{
    randomWidth.value = withTiming(bool ? 45 : 0, config);
  };

  useImperativeHandle(ref, ()=>({
    Toggle
  }));
    return(
        <TouchableOpacity
                onPress={onPress}
                style={styles.margin}>
                    <View
                    style={styles.container}
                    >
                    <View style={styles.iconHolder}>
                        <Animated.View style={style}>
                        <Icon name="search" color="white" size={40} ></Icon>

                        </Animated.View>
                    </View>
                    </View>
                </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
  iconHolder:{
    backgroundColor: "#00425A",
    padding: 20,
    borderRadius: 180
  },
  container:{
    position: "absolute",
    alignSelf: "center",
    top: -40,
    backgroundColor: "#F0EEED",
    padding: 8,
    borderRadius: 180,
    marginTop: -10,
  },
  margin:{
    marginHorizontal: 25
  }
});