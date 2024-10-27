import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/global";
import { useState } from "react";

const Input = ({
  value,
  placeholder,
  outerStyles,
  rightButton,
  onTextChange,
  secureTextEntry = false,
  autofocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
      <TextInput
        autoFocus={autofocus}
        placeholder={placeholder}
        value={value}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.baseText}
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.dark_grey,
    backgroundColor: colors.light_gray,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: colors.black_primary,
  },
});

export default Input;
