import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Search from "./Search";

const Weather = ({ data, fetchWeather }) => {
  const { name, weather, coords, main, wind, sys } = data;
  //   alert(data.weather);
  const imageUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  return (
    <View style={styles.container}>
      <Search fetchWeather={fetchWeather} />
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <Text style={styles.temp}>{Math.round(main.temp - 272)} °C</Text>
      <Text style={styles.description}>{weather[0].description}</Text>
      <View style={styles.info}>
        <View style={styles.infoPart}>
          <Image
            style={styles.imageInfo}
            source={require("../assets/wind.png")}
          />
          <Text style={styles.titleInfo}>Wind speed: {wind.speed} m/s</Text>
        </View>
        <View style={styles.infoPart}>
          <Image
            style={styles.imageInfo}
            source={require("../assets/humidity.png")}
          />
          <Text style={styles.titleInfo}>Humidity: {main.humidity} % </Text>
        </View>
        <View style={styles.infoPart}>
          <Image
            style={styles.imageInfo}
            source={require("../assets/temperature.jpg")}
          />
          <Text style={styles.titleInfo}>
            Temperature: {Math.round(main.temp - 272)} °C{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  description: { margin: 10, textAlign: "center" },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  infoPart: {
    width: Dimensions.get("screen").width / 4,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    margin: 5,
  },
  imageInfo: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  titleInfo: {
    textAlign: "center",
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
