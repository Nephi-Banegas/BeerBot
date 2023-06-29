import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

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
        <TouchableOpacity style={styles.button} onPress={handleCreateNewRecipe}>
          <Text style={styles.buttonText}>Create New Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewEditRecipe}>
          <Text style={styles.buttonText}>View/Edit Recipe</Text>
        </TouchableOpacity>
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
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#5637DD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditRecipesScreen;
