import HomeScreen from "./HomeScreen";
import LogBrewScreen from "./LogBrewScreen";
import EditRecipesScreen from "./EditRecipesScreen";
import CreateRecipeBasicsScreen from "./CreateRecipeBasics";
import CreateRecipeGrainBill from "./CreateRecipeGrainBill";
import CreateRecipeHopSchedule from "./CreateRecipeHopSchedule";
import CreateRecipeAdjuncts from "./CreateRecipeAdjuncts";
import CreateRecipeNotes from "./CreateRecipeNotes";
import CreateRecipeReview from "./CreateRecipeReview";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogBrew" component={LogBrewScreen} />
      <Stack.Screen
        name="EditRecipes"
        component={EditRecipesScreen}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen
        name="CreateRecipeBasics"
        component={CreateRecipeBasicsScreen}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen
        name="CreateRecipeGrainBill"
        component={CreateRecipeGrainBill}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen
        name="CreateRecipeHopSchedule"
        component={CreateRecipeHopSchedule}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen
        name="CreateRecipeAdjuncts"
        component={CreateRecipeAdjuncts}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen
        name="CreateRecipeNotes"
        component={CreateRecipeNotes}
        options={({ navigation }) => ({ screenProps: { navigation } })}
      />
      <Stack.Screen name="CreateRecipeReview" component={CreateRecipeReview} />
    </Stack.Navigator>
  );
};

export default Main;
