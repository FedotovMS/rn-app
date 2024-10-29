const { ImageBackground, StyleSheet } = require("react-native");

const BackgroundImageWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/images/backgroundImg.png")}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageWrapper;

const styles = StyleSheet.create({
  backgroundImg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
