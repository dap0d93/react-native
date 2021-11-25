import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Stories from "./Stories";
import Post from "./Post";
import { POSTS } from "./Constants";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
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
