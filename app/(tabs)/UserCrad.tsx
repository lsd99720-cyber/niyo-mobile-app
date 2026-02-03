import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
type UserCardProps = {
    name: string;
    avatarUrl: string;
};
const UserCard = ({ name, avatarUrl }: UserCardProps) => (
    <View style={styles.card}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10,
        margin: 10,
        borderRadius: 8,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
    },
});
export default UserCard;