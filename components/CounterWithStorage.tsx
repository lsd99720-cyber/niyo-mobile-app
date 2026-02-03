import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; export default function CounterWithStorage() {
    const [count, setCount] = useState(0);
    const STORAGE_KEY = "@my_counter";
    // Load count from storage when component mounts
    useEffect(() => {
        const loadCount = async () => {
            try {
                const value = await AsyncStorage.getItem(STORAGE_KEY);
                if (value !== null) {
                    setCount(parseInt(value));
                }
            } catch (e) {
                console.error("Failed to load count.", e);
            }
        };
        loadCount();
    }, []);

    const increaseCount = async () => {
        const newCount = count + 1;
        setCount(newCount);
        try {
            await AsyncStorage.setItem(STORAGE_KEY, newCount.toString());
        } catch (e) {
            console.error("Failed to save count.", e);
        }
    };
    return (
        <View>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="Increase" onPress={increaseCount} />
        </View>
    );
} const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
})