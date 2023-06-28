import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import RenderAdjuncts from "../components/RenderAdjuncts";
import { DataContext } from "../context/DataContext";

const CreateRecipeAdjuncts = ({ navigation }) => {
  const [adjunctType, setAdjunctType] = useState("");
  const [adjunctAmount, setAdjunctAmount] = useState("");
  const [adjunctTime, setAdjunctTime] = useState("");
  const { adjuncts, setAdjuncts } = useContext(DataContext);

  const handleAddAdjunct = () => {
    // Check if both grain type and amount are provided
    if (adjunctType && adjunctAmount && adjunctTime) {
      const newAdjunct = {
        type: adjunctType,
        amount: adjunctAmount,
        time: adjunctTime,
      };

      // Add the new grain to the grainBill array
      setAdjuncts((prevAdjuncts) => [...prevAdjuncts, newAdjunct]);
      console.log(adjunctType, adjunctAmount, adjunctTime);
      console.log(adjuncts);

      // Clear the input fields
      setAdjunctType("");
      setAdjunctAmount("");
      setAdjunctTime("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Any Adjuncts?</Text>

      <TextInput
        style={styles.input}
        placeholder="Adjunct Type"
        value={adjunctType}
        onChangeText={setAdjunctType}
      />

      <TextInput
        style={styles.input}
        placeholder="Adjunct Amount"
        value={adjunctAmount}
        onChangeText={setAdjunctAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Adjunct Time"
        value={adjunctTime}
        onChangeText={setAdjunctTime}
      />

      <Button title="Add" onPress={handleAddAdjunct} />

      <Text style={styles.subHeading}>Adjuncts:</Text>

      <RenderAdjuncts adjuncts={adjuncts} />

      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={() => navigation.navigate("CreateRecipeNotes")}
        />
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
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default CreateRecipeAdjuncts;
