import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProfileScreen = ({ userData, handleLogout }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>
            <Text style={styles.text}>
                Name: {`${userData.FirstName} ${userData.LastName}`}
            </Text>

            <Text style={styles.text}>Age: {userData.Age}</Text>
            <Text style={styles.text}>Gender: {userData.Gender}</Text>
            <Text style={styles.text}>
                Fitness Level: {userData.FitnessLevel}
            </Text>
            <Text style={styles.text}>
                Yoga Experience: {userData.YogaExperience}
            </Text>
            <Text style={styles.text}>Yoga Style: {userData.YogaStyle}</Text>
            <View style={styles.intensityLevelContainer}>
                <Text style={styles.text}>Yoga Intensity Level:</Text>
                <View
                    style={{
                        height: 10,
                        width: `${userData.YogaIntensityLevel * 10}%`,
                        backgroundColor: userData.YogaIntensityLevelColor,
                        marginLeft: 10,
                        // borderColor: "black",
                        // borderWidth: 1,
                        marginBottom: 10,
                        borderRadius: 5,
                    }}></View>
            </View>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        // marginRight: 20,
    },
    intensityLevelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default ProfileScreen;
