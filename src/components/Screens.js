import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/Settings.js';
import Favorites from '../pages/Favorites.js';
import Home from '../pages/Home.js';
import CustomTabBar from './CustomTabBar.js';
import Search from '../pages/Search.js';
import Notifications from '../pages/Notifications.js';
import ControlBar from './ControlBar.js';

const Tab = createBottomTabNavigator();


export default ()=>{
    return (
        <Tab.Navigator screenOptions={{
            header: () => (<ControlBar></ControlBar>)
        }}
        tabBar={props=>(
            <CustomTabBar {...props}></CustomTabBar>
        )}>
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
            <Tab.Screen name='Favorites' component={Favorites}></Tab.Screen>
            <Tab.Screen name='Search' component={Search}></Tab.Screen>
            <Tab.Screen name='Notifications' component={Notifications}></Tab.Screen>
            <Tab.Screen name='Settings' component={Settings}></Tab.Screen>
        </Tab.Navigator>
    );
};