import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
type UserCardProps = {
    name: string;
    avatarUrl: string;
};
export default function UserCard({ name, avatarUrl }: UserCardProps) {
    const router = useRouter();
    return (
        <View style={styles.card}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Button
                    title="See Info"
                    onPress={() =>
                        router.push({
                            pathname: "/user/[name]",
                            params: { name, avatarUrl },
                        })
                    }
                />

            </View>
        </View>
    );
}
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
        marginBottom: 5,
    },
});