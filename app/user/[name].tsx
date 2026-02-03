import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
export default function UserInformationScreen() {
    const { name, avatarUrl } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatarUrl as string }} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,
    },

    avatar: { 
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
});