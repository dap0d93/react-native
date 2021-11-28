import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { POST_FOOTER_ICONS } from "./Constants";

const Post = ({ post }) => {
  return (
    <View style={style.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={style.post_footer_container}>
        <PostFooter />
        <PostLikes post={post} />
        <Caption post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={style.post_header_container}>
    <View style={style.profile_area}>
      <Image
        source={{ uri: post.profile_pictures }}
        style={style.profile_picture}
      />
      <Text style={style.profile_username}>{post.user}</Text>
    </View>
    <Text style={style.dots}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={style.post_image_container}>
    <Image source={{ uri: post.image_url }} style={style.post_image} />
  </View>
);

const PostFooter = () => (
  <View style={style.post_footer_icons_container}>
    <View style={style.left_post_footer_container}>
      <PostFooterIcon
        image_style={style.post_footer_icons}
        image_url={POST_FOOTER_ICONS[0].image_url}
      />
      <PostFooterIcon
        image_style={style.post_footer_icons}
        image_url={POST_FOOTER_ICONS[1].image_url}
      />
      <PostFooterIcon
        image_style={style.post_footer_icons}
        image_url={POST_FOOTER_ICONS[2].image_url}
      />
    </View>
    <View style={style.right_post_footer_container}>
      <PostFooterIcon
        image_style={style.post_footer_icons}
        image_url={POST_FOOTER_ICONS[3].image_url}
      />
    </View>
  </View>
);

const PostFooterIcon = ({ image_style, image_url }) => (
  <TouchableOpacity>
    <Image style={image_style} source={{ uri: image_url }} />
  </TouchableOpacity>
);

const PostLikes = ({ post }) => (
  <View style={style.post_likes_container}>
    <Text style={style.post_likes}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={style.caption_container}>
    <Text style={style.caption}>
      <Text style={style.bolded_caption}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  post_header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },

  profile_area: {
    flexDirection: "row",
    alignItems: "center",
  },

  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "darkorange",
  },

  profile_username: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },

  dots: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },

  post_image_container: {
    width: "100%",
    height: 450,
  },

  post_image: {
    height: "100%",
    resizeMode: "cover",
  },

  post_footer_container: {
    marginHorizontal: 15,
    marginTop: 10,
  },

  post_footer_icons_container: {
    flexDirection: "row",
  },

  left_post_footer_container: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },

  right_post_footer_container: {
    flex: 1,
    alignItems: "flex-end",
  },

  post_footer_icons: {
    width: 27,
    height: 27,
  },

  post_likes_container: {
    flexDirection: "row",
    marginTop: 4,
  },

  post_likes: {
    color: "white",
    fontWeight: "700",
  },

  caption_container: {
    marginTop: 5,
  },

  caption: {
    color: "white",
  },

  bolded_caption: {
    fontWeight: "700",
  },
});

export default Post;
