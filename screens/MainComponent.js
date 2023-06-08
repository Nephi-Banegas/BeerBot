import HomeScreen from "./HomeScreen";
import LogBrewScreen from "./LogBrewScreen";
import EditRecipesScreen from "./EditRecipesScreen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogBrew" component={LogBrewScreen} />
      <Stack.Screen name="EditRecipes" component={EditRecipesScreen} />
    </Stack.Navigator>
  );
};

export default Main;
