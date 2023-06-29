import { FlatList, View, Text, StyleSheet } from "react-native";

const RenderGrainBill = ({ grainBill }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.label}>Amount</Text>
      </View>
      <FlatList
        data={grainBill}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.grainItem}>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RenderGrainBill;

const styles = StyleSheet.create({
  grainItem: {
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
  container: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    marginBottom: 16,
  },
});
