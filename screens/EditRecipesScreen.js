import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const EditRecipesScreen = ({ navigation }) => {
  const handleCreateNewRecipe = () => {
    navigation.navigate("CreateRecipeBasics");
  };

  const handleViewEditRecipe = () => {
    // Implement logic to navigate to view/edit recipe screen
    console.log("View/Edit Recipe button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>What would you like to do?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Create a New Recipe" onPress={handleCreateNewRecipe} />
        <Button
          title="View/Edit an Existing Recipe"
          onPress={handleViewEditRecipe}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default EditRecipesScreen;
