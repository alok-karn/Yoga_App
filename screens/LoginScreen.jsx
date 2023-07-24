import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = ({ handleLogin, setEmail, setPassword }) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleLogin = () => {
    //     console.log("Login button pressed");

    //     if (email === "alokkarn@gmail.com" && password === "12345678") {
    //         alert("Login successful");
    //     } else {
    //         alert("Invalid credentials");
    //     }
    // };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login !</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                // value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                // value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginButton: {
        width: "100%",
        height: 40,
        backgroundColor: "#297045",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
