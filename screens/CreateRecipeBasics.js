import React, { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { DataContext } from "../context/DataContext";

const CreateNewRecipeBasics = ({ navigation }) => {
  const { basicInfo, setBasicInfo } = useContext(DataContext);

  const handleChange = (name, value) => {
    setBasicInfo((prevBasicInfo) => ({
      ...prevBasicInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Use the basicInfo object as needed (e.g., save it to a database)
    console.log(basicInfo);
    // Navigate to another screen if desired
    navigation.navigate("CreateRecipeGrainBill");
  };

  const handleCancel = () => {
    // Perform cancel logic here
    console.log("Cancel button pressed");
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
});

export default CreateNewRecipeBasics;
