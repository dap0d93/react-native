import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "7%",
    backgroundColor: "black",
  },
});

export default HomePage;
