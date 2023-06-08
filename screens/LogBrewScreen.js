import { useState } from "react";
import DatePicker from "react-native-datepicker";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const LogBrewScreen = () => {
  const [formState, setFormState] = useState({
    recipeName: "",
    mashTemp: "",
    finalGravity: "",
    finalVolume: "",
    abv: "",
    notes: "",
  });

  const handleChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Perform save logic here
    console.log("Save button pressed");
  };

  const handleCancel = () => {
    // Perform cancel logic here
    console.log("Cancel button pressed");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
        value={formState.recipeName}
        onChangeText={(value) => handleChange("recipeName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mash Temp"
        value={formState.mashTemp}
        onChangeText={(value) => handleChange("mashTemp", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Final Gravity"
        value={formState.finalGravity}
        onChangeText={(value) => handleChange("finalGravity", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Final Volume"
        value={formState.finalVolume}
        onChangeText={(value) => handleChange("finalVolume", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="ABV"
        value={formState.abv}
        onChangeText={(value) => handleChange("abv", value)}
      />
      <TextInput
        style={styles.notesInput}
        placeholder="Notes"
        value={formState.notes}
        onChangeText={(value) => handleChange("notes", value)}
        multiline={true}
        textAlignVertical="top"
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  notesInput: {
    height: 120, // Increase the height to make it larger
    borderWidth: 1, // Add a border
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  datePickerText: {
    fontSize: 16,
    color: "black",
  },
  datePickerPlaceholder: {
    fontSize: 16,
    color: "gray",
  },
});

export default LogBrewScreen;
