import React, { useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage, ...otherProps }) {

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!request.granted) {
      alert("You need to enable permission to access the library");
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [{ text: "Yes", onPress: () => onChangeImage(null) }, { text: "No" }]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} {...otherProps}>
      <View style={styles.button}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.imageUri} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  imageUri: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
