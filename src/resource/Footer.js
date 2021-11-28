import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";

const Footer = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          style.icon,
          icon.name === "Profile" ? style.profile_pic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? style.profile_pic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={style.footer_container}>
      <Divider width={1} orientation="vertical" />
      <View style={style.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  footer_container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "black",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30,
  },

  profile_pic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "white",
  }),
});

export default Footer;
