import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { colors } from "../styles/global";
import Input from "../shared/Input";
import { useState } from "react";
import Button from "../shared/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const showPassVisible = () => {
    setIsPassVisible((prev) => !prev);
  };

  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };

  const onSignUp = () => {
    console.log("Sign up!");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassVisible}>
      <Text style={[styles.baseText, styles.showButton]}>Show</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/images/backgroundImg.png")}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "heightg"}
          style={styles.container}
        >
          <View style={styles.formWrapper}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.innerContainer}>
              <Input
                value={email}
                placeholder="Email address"
                onTextChange={handleEmailChange}
              />
              <Input
                value={password}
                placeholder="Password"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={!isPassVisible}
              />
            </View>
            <View style={styles.btnWrapper}>
              <Button buttonStyle={styles.loginBtn}>
                <Text
                  style={[styles.baseText, styles.loginButtonText]}
                  onPress={onLogin}
                >
                  Login
                </Text>
              </Button>
              <View style={styles.signupWrapper}>
                <Text style={[styles.baseText, styles.noAccText]}>
                  No account?{" "}
                  <TouchableWithoutFeedback>
                    <Text style={styles.signUpText} onPress={onSignUp}>
                      Register
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>

            <View style={styles.innerContainer}></View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formWrapper: {
    width: SCREEN_WIDTH,
    height: "50%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 33,
  },
  innerContainer: {
    gap: 16,
    marginBottom: 43,
  },
  baseText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
  },
  showButton: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtn: {
    marginBottom: 16,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  signupWrapper: {
    alignItems: "center",
  },
  noAccText: {
    color: colors.blue,
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
