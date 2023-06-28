import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RenderBasicInfo = ({ basicInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Beer Name:</Text>
        <Text style={styles.value}>{basicInfo.beerName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Beer Style:</Text>
        <Text style={styles.value}>{basicInfo.beerStyle}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Target OG:</Text>
        <Text style={styles.value}>{basicInfo.targetOG}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Target ABV:</Text>
        <Text style={styles.value}>{basicInfo.targetABV}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Target Volume:</Text>
        <Text style={styles.value}>{basicInfo.targetVolume}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  value: {
    flex: 1,
  },
});

export default RenderBasicInfo;
