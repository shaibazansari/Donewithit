import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "title 1",
    price: "subtitle 1",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "title 2",
    price: "subtitle 2",
    image: require("../assets/jacket.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => <Card title={item.title} subTitle={item.price} image={item.image} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
