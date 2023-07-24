import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PizzaTranslator from "./components/PizzaTranslator";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import MeditationExercise from "./screens/MeditationExercise";
// import PoseDetail from "./screens/PoseDetail";
import GuidedSessions from "./screens/GuidedSessions";

import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import userData from "./data/SampleUserData";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = () => {
        const user = userData.find(
            (user) => user.Email === email && user.Password === password
        );
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
        } else {
            alert("Invalid credentials");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
    };

    return (
        // <View style={styles.container}>
        //     <Text>Open up App.js to start working on your app!</Text>
        //     {/* <PizzaTranslator /> */}
        //     <StatusBar style="auto" />
        // </View>

        <NavigationContainer>
            {isLoggedIn ? (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = focused ? "home" : "home-outline";
                            } else if (route.name === "GuidedSessions") {
                                iconName = focused ? "play" : "play-outline";
                            } else if (route.name === "MeditationExercise") {
                                iconName = focused ? "moon" : "moon-outline";
                            } else if (route.name === "Profile") {
                                iconName = focused
                                    ? "person"
                                    : "person-outline";
                            }
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "gray",
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen
                        name="GuidedSessions"
                        component={GuidedSessions}
                    />
                    <Tab.Screen
                        name="MeditationExercise"
                        component={MeditationExercise}
                    />
                    <Tab.Screen name="Profile">
                        {() => (
                            <ProfileScreen
                                userData={currentUser}
                                handleLogout={handleLogout}
                            />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login">
                        {() => (
                            <LoginScreen
                                handleLogin={handleLogin}
                                setEmail={setEmail}
                                setPassword={setPassword}
                            />
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
