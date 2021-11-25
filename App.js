import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const app = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text>Testing</Text>
      </View>
    </ScrollView>
  );
};

export default app;
