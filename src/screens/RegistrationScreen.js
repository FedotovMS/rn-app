import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import { colors } from "../../styles/global";
import BackgroundImageWrapper from "../../src/shared/BackgroundWrapper";
import Input from "../../src/shared/Input";
import Button from "../../src/shared/Button";
import IconAdd from "../../icons/IconAdd";
import { registerDB } from "../redux/reducers/operations";
import { useDispatch } from "react-redux";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = ({ navigation }) => {
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

  const handleLoginChange = (value) => {
    setLogin(value);
  };

  const showPassword = () => {
    setIsPassVisible((prev) => !prev);
  };

  const handleChoosePhoto = () => {};

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const onSignUp = () => {
    if (login && email && password) {
      dispatch(registerDB(login, email, password));
    }
    reset();
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Show</Text>
    </TouchableOpacity>
  );

  return (
    <BackgroundImageWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.formContainer}>
            <TouchableOpacity
              onPress={handleChoosePhoto}
              style={styles.avatarContainer}
            >
              <ImageBackground style={styles.avatar}>
                <IconAdd style={styles.iconAdd} />
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.title}>Registration</Text>
            <View style={[styles.innerContainer]}>
              <Input
                value={login}
                autofocus={true}
                placeholder="Login"
                onTextChange={handleLoginChange}
              />
              <Input
                value={email}
                autofocus={true}
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

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onSignUp}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Register
                </Text>
              </Button>
              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.showButton]}>
                  Already registered?{" "}
                  <TouchableWithoutFeedback onPress={onLogin}>
                    <Text style={styles.signUpText}>Login</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BackgroundImageWrapper>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    width: SCREEN_WIDTH,
    height: "65%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 32,
  },

  innerContainer: {
    gap: 16,
    width: "100%",
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  showButton: {
    color: colors.blue,
    marginBottom: 45,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
  },
  avatar: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  iconAdd: {
    position: "absolute",
    bottom: 14,
    right: -13,
  },
});
