import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../styles/global";
import Post from "../shared/Post";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postWrapper}>
        <View style={styles.image}></View>
        <View>
          <Text style={styles.textName}>Natali Romanova</Text>
          <Text style={styles.emailText}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.postList}>
        <Post />
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postWrapper: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
  },
  textWrapper: {},
  textName: {
    fontSize: 13,
    fontWeight: 700,
  },
  emailText: {
    fontSize: 11,
    fontWeight: 400,
    color: colors.black80,
  },
  postList: {},
});
