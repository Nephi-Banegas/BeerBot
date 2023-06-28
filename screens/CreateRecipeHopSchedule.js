import { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import RenderHopSchedule from "../components/RenderHopSchedule";
import { DataContext } from "../context/DataContext";

const CreateRecipeHopSchedule = ({ navigation }) => {
  const [hopType, setHopType] = useState("");
  const [hopAmount, setHopAmount] = useState("");
  const [hopTime, setHopTime] = useState("");
  const { hopSchedule, setHopSchedule } = useContext(DataContext);

  const handleAddHop = () => {
    // Check if both grain type and amount are provided
    if (hopType && hopAmount && hopTime) {
      const newHop = { type: hopType, amount: hopAmount, time: hopTime };

      // Add the new grain to the grainBill array
      setHopSchedule((prevHopSchedule) => [...prevHopSchedule, newHop]);
      console.log(hopType, hopAmount, hopTime);
      console.log(hopSchedule);

      // Clear the input fields
      setHopType("");
      setHopAmount("");
      setHopTime("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Now the Hops!</Text>

      <TextInput
        style={styles.input}
        placeholder="Hop Type"
        value={hopType}
        onChangeText={setHopType}
      />

      <TextInput
        style={styles.input}
        placeholder="Hop Amount"
        value={hopAmount}
        onChangeText={setHopAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Hop Time"
        value={hopTime}
        onChangeText={setHopTime}
      />

      <Button title="Add" onPress={handleAddHop} />

      <Text style={styles.subHeading}>Hop Schedule:</Text>

      <RenderHopSchedule hopSchedule={hopSchedule} />

      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={() => navigation.navigate("CreateRecipeAdjuncts")}
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

export default CreateRecipeHopSchedule;
