// import { Alert, Button, View } from "react-native";
// import React, { use, useState } from "react";
// import { StyleSheet, Text, ScrollView, Image, ActivityIndicator, } from "react-native";








// // export default function homeScreen(){
// //   return (
// //     <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
// //       <Button title="Press Me " color={"#0000ff"} onPress={() => Alert.alert("You Pressed me!")}/>
// //     </View>
// //   );
// // }

// export default function App() {
//   const [loading, setloading] = useState(false);
//   const [count, setCount] = useState(0);

//   const handlePress = () => {
//     setloading(true);
//     setTimeout(() => {
//       setloading(false);
//       setCount((prev) => prev + 1);
//     }, 1500);
//   };
//   const styles = StyleSheet.create({
//     container: {
//       flexGrow: 1,
//       padding: 20,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: "#F5FCFF",
//     },
//     title: {
//       fontSize: 24,
//       marginBottom: 20,
//       fontWeight: "bold",
//     },
//     text: {
//       fontSize: 16,
//       marginVertical: 10,
//       textAlign: "center",
//     },

//     count: {
//       fontSize: 18,
//       marginTop: 15,
//       color: "#007AFF",
//     },
//     loader: {
//       marginTop: 15,
//     },
//     image: {
//       width: 80,
//       height: 80,
//       marginBottom: 20,
//     },
//   });
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>React Native Component Demo</Text>
//       <Image
//         source={{
//           uri: "https://reactnative.dev/img/tiny_logo.png",
//         }}
//         style={styles.image}
//       />
//       <Text style={styles.text}>
//         Press the button to simulate loading and increase count.
//       </Text>
//       <Button title="Press Me" onPress={handlePress} />
//       {loading ? (
//         <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
//       ) : (
//         <Text style={styles.count}>Pressed: {count} times</Text>
//       )}
//     </ScrollView>

//   );
// }
// import React, { useState } from "react";
// import { StyleSheet, TextInput, View } from "react-native";


// export default function HomeScreen() {
//   const [text, onChangeText] =  useState('');
//   return (

//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

//       <TextInput 
//       // style = {styles.input}
//       onChangeText={onChangeText}
//       value = {text}
//       placeholder="Please Write Text"
//       // keyboardType="numeric"
//       />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
// input:{
//   height:40,
//   margin:12,
//   borderWidth:1,
//   padding:10,
// }
// });

// import React from "react";
// import { ScrollView } from "react-native";

// import UserCard from "@/app/(tabs)/UserCrad"
// export default function HomeScreen() {
//   return (
//     <ScrollView>
//       <UserCard
//         name="Jane Doe"
//         avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
//       />
//       <UserCard
//         name="John Smith"
//         avatarUrl="https://randomuser.me/api/portraits/men/22.jpg"
//       />

//       <UserCard
//         name="Alice"
//         avatarUrl="https://randomuser.me/api/portraits/women/12.jpg"
//       />
//     </ScrollView>
//   );
// }

// import VaribleCounter from "@/components/VariableCounter";
// import CounterExample from "@/components/CounterExample";
// import NameInputExample from "@/components/NameInputExample";
// import { StyleSheet, View } from "react-native";
// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <CounterExample/>
//       <VaribleCounter/>
//       <NameInputExample />

//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 32,
//   },
// });


import CounterWithStorage from"@/components/CounterWithStorage";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CounterWithStorage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});