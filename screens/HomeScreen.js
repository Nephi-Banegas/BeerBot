import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleLogBrewPress = () => {
    navigation.navigate("LogBrew");
  };

  const handleEditRecipesPress = () => {
    navigation.navigate("EditRecipes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to BeerBot</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogBrewPress}>
        <Text style={styles.buttonText}>Log a Brew</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEditRecipesPress}>
        <Text style={styles.buttonText}>Create/Edit Recipes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#5637DD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
