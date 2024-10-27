import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/global";

const Input = ({
  value,
  placeholder,
  outerStyles,
  rightButton,
  onTextChange,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.input, outerStyles]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
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
});

export default Input;
