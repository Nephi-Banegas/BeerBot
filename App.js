import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
