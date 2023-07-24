import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Your Yoga App</Text>
            <Text style={styles.description}>
                Practice Yoga anytime, anywhere !
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#666",
    },
});

export default HomeScreen;
