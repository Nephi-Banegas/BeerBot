import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { DataContext } from "../context/DataContext";
import handleCancel from "../features/CancelHandler";

const CreateNewRecipeBasics = ({ navigation }) => {
  const { basicInfo, setBasicInfo, resetContext } = useContext(DataContext);

  const handleChange = (name, value) => {
    setBasicInfo((prevBasicInfo) => ({
      ...prevBasicInfo,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Beer Name"
        value={basicInfo.beerName}
        onChangeText={(value) => handleChange("beerName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Beer Style"
        value={basicInfo.beerStyle}
        onChangeText={(value) => handleChange("beerStyle", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Target OG"
        value={basicInfo.targetOG}
        onChangeText={(value) => handleChange("targetOG", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Target ABV"
        value={basicInfo.targetABV}
        onChangeText={(value) => handleChange("targetABV", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Target Volume"
        value={basicInfo.targetVolume}
        onChangeText={(value) => handleChange("targetVolume", value)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("CreateRecipeGrainBill")}
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

export default CreateNewRecipeBasics;
