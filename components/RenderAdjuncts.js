import { FlatList, View, Text, StyleSheet } from "react-native";

const RenderAdjuncts = ({ adjuncts }) => {
  return (
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
  );
};

export default RenderAdjuncts;

const styles = StyleSheet.create({
  adjunctItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
