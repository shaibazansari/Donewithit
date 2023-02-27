import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import AppButton from "./app/components/Button";
import { Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!request.granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
