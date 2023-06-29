import { Alert } from "react-native";

const handleCancel = (resetContext, navigation) => {
  Alert.alert(
    "Cancel",
    "Are you sure you want to stop building the recipe? All changes will be lost.",
    [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          resetContext();
          navigation.navigate("Home");
        },
      },
    ]
  );
};
export default handleCancel;
