import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { DataContext } from "../context/DataContext";
import RenderGrainBill from "../components/RenderGrainBill";

const CreateRecipeGrainBill = ({ navigation }) => {
  const { grainBill, setGrainBill } = useContext(DataContext);
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
        <Button
          title="Save"
          onPress={() => navigation.navigate("CreateRecipeHopSchedule")}
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

export default CreateRecipeGrainBill;
