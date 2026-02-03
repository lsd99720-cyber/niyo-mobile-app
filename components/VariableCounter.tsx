import React from "react";
import { Button, Text, View } from "react-native";
export default function VariableCounter() {
    let count = 0; 
    return (
        <View>
            <Text>Variable Count: {count}</Text>
            <Button
                title="Add"
                onPress={() => {
                    count = count + 1;
                    console.log("count:", count); 
                }}
            />
        </View>
    );
}