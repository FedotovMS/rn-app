import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../styles/global";
import IconCamera from "../../icons/IconCamera";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useNavigation } from "@react-navigation/native";

const CreatePostScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cameraBtn}
        onPress={() => navigation.navigate("Camera")}
      >
        <IconCamera />
      </TouchableOpacity>
      <Text style={styles.uploadText}>Upload picture</Text>

      <View style={styles.inputWrapper}>
        <Input placeholder={"Tilte"} />
        <Input placeholder={"Location"} />
      </View>
      <Button>
        <Text>Publish</Text>
      </Button>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: colors.white,
  },
  cameraBtn: {
    height: "30%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.dark_grey,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light_gray,
    marginBottom: 8,
  },
  uploadText: {
    marginBottom: 32,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 32,
  },
});
