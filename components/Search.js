import { StyleSheet, TextInput, View, Button, Dimensions } from "react-native";
import React, { useState } from "react";

const Search = ({ fetchWeather }) => {
  const [cityName, setCityName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput
          style={styles.footerText}
          placeholder="city name"
          value={cityName}
          onChangeText={(value) => setCityName(value)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="add"
          color="blue"
          onPress={() => fetchWeather(cityName)}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  footer: {
    // backgroundColor: "lightgray",
    // alignItems: "center",
    width: Dimensions.get("screen").width - 80,
    borderWidth: 1.5,
    // marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  button: {
    justifyContent: "flex-end",
  },
  //   footerText: {
  //     color: "black",
  //     padding: 10,
  //   },
});
