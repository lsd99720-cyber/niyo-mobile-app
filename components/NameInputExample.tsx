import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
export default function NameInputExample() {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.label}>What's your name?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.output}>Hello, {name || "Stranger"}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        marginBottom: 20,
    },
    output: {
        fontSize: 20,
        fontWeight: "bold",
    },
});