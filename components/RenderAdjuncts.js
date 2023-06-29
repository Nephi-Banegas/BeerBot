import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const RenderAdjuncts = ({ adjuncts }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.label}>Time</Text>
      </View>
      <FlatList
        data={adjuncts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.adjunctItem}>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    marginBottom: 16,
  },
  adjunctItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f2f2f2",
  },
  label: {
    fontWeight: "bold",
  },
});

export default RenderAdjuncts;
