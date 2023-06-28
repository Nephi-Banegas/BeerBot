import { Text, View, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import RenderAdjuncts from "../components/RenderAdjuncts";
import RenderHopSchedule from "../components/RenderHopSchedule";
import RenderGrainBiill from "../components/RenderGrainBill";
import RenderBasicInfo from "../components/RenderBasicInfo";
import { DataContext } from "../context/DataContext";

const CreateRecipeReview = ({ navigation }) => {
  const { basicInfo, grainBill, hopSchedule, adjuncts, notes } =
    useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Great, Now Lets Review!</Text>
      <Text style={styles.subHeading}>Basic Info:</Text>
      <RenderBasicInfo basicInfo={basicInfo} />

      <Text style={styles.subHeading}>Grain Bill:</Text>
      <RenderGrainBiill grainBill={grainBill} />

      <Text style={styles.subHeading}>Hop Schedule:</Text>
      <RenderHopSchedule hopSchedule={hopSchedule} />

      <Text style={styles.subHeading}>Adjuncts:</Text>
      <RenderAdjuncts adjuncts={adjuncts} />

      <Text style={styles.subHeading}>Notes:</Text>
      <Text>{notes}</Text>
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

export default CreateRecipeReview;
