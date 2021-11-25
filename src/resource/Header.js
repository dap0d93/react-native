import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          style={style.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 8,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default Header;
