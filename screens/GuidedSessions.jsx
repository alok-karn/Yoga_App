import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const GuidedSessions = () => {
    const sessionData = [
        { id: "1", title: "Morning Exercise", duration: "10 mins" },
        { id: "2", title: "Relax and Unwind", duration: "15min" }, // add more data in future
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.sessionItem}>
                <Text style={styles.sessionTitle}>{item.title}</Text>
                <Text style={styles.sessionDuration}>{item.duration}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Guided Yoga Sessions</Text>
            <FlatList
                data={sessionData}
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
    sessionItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
    },
    sessionTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    sessionDuration: {
        fontSize: 14,
        color: "#666",
    },
});
export default GuidedSessions;
