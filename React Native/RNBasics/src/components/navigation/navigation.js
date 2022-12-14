import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

// Stack Navigation:
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
// let { Navigator , Screen } = Stack;
// let MainNavigator = createNativeStackNavigator();

// Drawer Navigation:
// import { createDrawerNavigator } from "@react-navigation/drawer";
// const DrawerStack = createDrawerNavigator();
// let { Navigator, Screen } = DrawerStack;

// Bottom Tabs Navigation...!
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabsStack = createBottomTabNavigator();
const { Navigator, Screen } = BottomTabsStack;

// Import components...!
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                {/* Note: For Stack Navigation */}

                {/* <Navigator screenOptions={{ headerShown: false }} >
                    <Screen component={Home} name="home-screen" />
                    <Screen component={About} name="about-screen" />
                </Navigator> */}

                {/* <MainNavigator.Navigator>
                    <MainNavigator.Screen component={Home} name="home-screen" />
                    <MainNavigator.Screen component={About} name="about-screen" />
                </MainNavigator.Navigator> */}


                {/* Note: For Drawer Navigation */}
                {/* <Navigator>
                    <Screen name='home-screen' component={Home} />
                    <Screen name='about-screen' component={About} />
                </Navigator> */}


                {/* Note: For Botton Tabs Navigation */}
                <Navigator>
                    <Screen name='home-screen' component={Home} />
                    <Screen name='about-screen' component={About} />
                    <Screen name='contact-screen' component={Contact} />
                </Navigator>
            </NavigationContainer>
        </>
    );
}

export default Navigation;