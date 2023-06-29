import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DataContext } from "../context/DataContext";
import RenderGrainBill from "../components/RenderGrainBill";
import handleCancel from "../features/CancelHandler";

const CreateRecipeGrainBill = ({ navigation }) => {
  const { grainBill, setGrainBill, resetContext } = useContext(DataContext);
  const [grainType, setGrainType] = useState("");
  const [grainAmount, setGrainAmount] = useState("");

  const handleAddGrain = () => {
    // Check if both grain type and amount are provided
    if (grainType && grainAmount) {
      const newGrain = { type: grainType, amount: grainAmount };

      // Add the new grain to the grainBill array using the setter function from DataContext
      setGrainBill((prevGrainBill) => [...prevGrainBill, newGrain]);

      // Clear the input fields
      setGrainType("");
      setGrainAmount("");
      console.log(grainBill);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Now Let's Build a Grain Bill!</Text>

      <TextInput
        style={styles.input}
        placeholder="Grain Type"
        value={grainType}
        onChangeText={setGrainType}
      />

      <TextInput
        style={styles.input}
        placeholder="Grain Amount"
        value={grainAmount}
        onChangeText={setGrainAmount}
      />

      <Button title="Add" onPress={handleAddGrain} />

      <Text style={styles.subHeading}>Grain Bill:</Text>

      <RenderGrainBill grainBill={grainBill} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("CreateRecipeHopSchedule")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => handleCancel(resetContext, navigation)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
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
  saveButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CreateRecipeGrainBill;
