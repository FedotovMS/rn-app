import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";

import { colors } from "../../styles/global";
import Input from "../../src/shared/Input";
import Button from "../../src/shared/Button";
import BackgroundImageWrapper from "../../src/shared/BackgroundWrapper";
import { useDispatch } from "react-redux";
import { loginDB } from "../redux/reducers/operations";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const onSignIn = () => {
    email && password
      ? (dispatch(
          loginDB({
            inputEmail: email,
            inputPassword: password,
          })
        ),
        reset())
      : Alert.alert("Input your credentials");
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const onSignUp = () => {
    navigation.navigate("Register");
  };

  useEffect(() => {
    if (login && email && password) {
      console.log(login, email, password);
      return;
    }
  }, [login, email, password]);

  const showPassword = () => {
    setIsPassVisible((prev) => !prev);
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.showButton]}>Show</Text>
    </TouchableOpacity>
  );

  return (
    <BackgroundImageWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
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
              <Button buttonStyle={styles.loginBtn} onPress={onSignIn}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Login
                </Text>
              </Button>
              <View style={styles.signupWrapper}>
                <Text style={[styles.baseText, styles.noAccText]}>
                  No account?{" "}
                  <TouchableWithoutFeedback onPress={onSignUp}>
                    <Text style={styles.signUpText}>Register</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>

            <View style={styles.innerContainer}></View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BackgroundImageWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
