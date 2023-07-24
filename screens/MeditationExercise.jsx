import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const MeditationExercise = () => {
    const meditationData = [
        { id: "1", title: "Mindful Meditation", duration: "10 mins" },
        { id: "2", title: "Stress Relief Meditation", duration: "15 mins" },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.exerciseItem}>
                <Text style={styles.exerciseTitle}>{item.title}</Text>
                <Text style={styles.exerciseDuration}>{item.duration}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Meditation Exercise</Text>
            <FlatList
                data={meditationData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    exerciseItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
    },
    exerciseTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    exerciseDuration: {
        fontSize: 14,
        color: "#666",
    },
});

export default MeditationExercise;
