import React, { useContext } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import RenderAdjuncts from "../components/RenderAdjuncts";
import RenderHopSchedule from "../components/RenderHopSchedule";
import RenderGrainBill from "../components/RenderGrainBill";
import RenderBasicInfo from "../components/RenderBasicInfo";
import { DataContext } from "../context/DataContext";
import handleCancel from "../features/CancelHandler";

const CreateRecipeReview = ({ navigation }) => {
  const { basicInfo, grainBill, hopSchedule, adjuncts, notes, resetContext } =
    useContext(DataContext);

  const reviewSections = [
    {
      title: "Basic Info",
      component: <RenderBasicInfo basicInfo={basicInfo} />,
      edit: (
        <Button
          title="Edit"
          onPress={() => navigation.navigate("CreateRecipeBasics")}
        />
      ),
    },
    {
      title: "Grain Bill",
      component: <RenderGrainBill grainBill={grainBill} />,
      edit: (
        <Button
          title="Edit"
          onPress={() => navigation.navigate("CreateRecipeGrainBill")}
        />
      ),
    },
    {
      title: "Hop Schedule",
      component: <RenderHopSchedule hopSchedule={hopSchedule} />,
      edit: (
        <Button
          title="Edit"
          onPress={() => navigation.navigate("CreateRecipeHopSchedule")}
        />
      ),
    },
    {
      title: "Adjuncts",
      component: <RenderAdjuncts adjuncts={adjuncts} />,
      edit: (
        <Button
          title="Edit"
          onPress={() => navigation.navigate("CreateRecipeAdjuncts")}
        />
      ),
    },
    {
      title: "Notes",
      component: <Text style={styles.notes}>{notes}</Text>,
      edit: (
        <Button
          title="Edit"
          onPress={() => navigation.navigate("CreateRecipeNotes")}
        />
      ),
    },
  ];

  const cancel = () => {
    handleCancel(resetContext, navigation);
  };

  return (
    <>
      <FlatList
        data={reviewSections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {item.component}
            {item.edit}
          </View>
        )}
        contentContainerStyle={styles.container}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  notes: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 10,
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

export default CreateRecipeReview;
