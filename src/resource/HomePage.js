import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Stories from "./Stories";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
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
