import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { USERS } from "./Constants";

const Stories = () => {
  return (
    <View style={style.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={style.center}>
            <Image source={{ uri: story.image }} style={style.story} />
            <Text style={style.username}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
        <Image />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 13,
  },

  center: {
    alignItems: "center",
  },

  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "darkorange",
  },

  username: {
    color: "white",
  },
});

export default Stories;
