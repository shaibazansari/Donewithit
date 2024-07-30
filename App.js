import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import defaultStyles from "./app/config/styles";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleDelete = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    // <Screen>
    //   <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleDelete}/>
    // </Screen>
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: defaultStyles.colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    color: defaultStyles.colors.medium,
  },
});
