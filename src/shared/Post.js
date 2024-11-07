import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Post = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <Text>POST</Text>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require("../../assets/images/forest.png")}
        ></Image>
      </View>
      <Text>Forest</Text>
      <View style={styles.postTextWrapper}>
        <View>
          <TouchableOpacity>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Text>Current locatoin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {},
  image: {
    width: 343,
    height: 240,
  },
  postTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
