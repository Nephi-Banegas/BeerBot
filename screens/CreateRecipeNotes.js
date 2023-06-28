import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { DataContext } from "../context/DataContext";

const CreateRecipeNotes = ({ navigation }) => {
  const { notes, setNotes } = useContext(DataContext);

  const handleSave = () => {
    // Perform any necessary actions with the saved notes
    console.log("Saved notes:", notes);

    // Navigate to the next screen or perform any other actions
    navigation.navigate("CreateRecipeReview");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Any Notes or Special Instructions?</Text>

      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Write your notes here"
        value={notes}
        onChangeText={setNotes}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  textArea: {
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default CreateRecipeNotes;
