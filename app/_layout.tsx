
// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import "react-native"
// import { useColorScheme } from "@/hooks/use-color-scheme.web";


// export default function RootLayout() {

//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//   SpaceMono:require("../assets/fonts/SapaceMono-regular.ttf")
// });

//   if (!loaded) {
//     return null;
//   }
//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="user/[name]" options={{ title: "User Info" }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }