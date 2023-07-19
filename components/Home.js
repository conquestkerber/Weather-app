import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const api_key = "7e2a7222422bb8d12e30add4b14504dd";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetchWeather = async (city) => {
    try {
      // setLoaded(false);
      const response = await axios.post(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      );
      if (response.status == 200) {
        setWeather(response.data);
      }
      setLoaded(true);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchWeather("Belgrade");
  }, []);

  if (!loaded) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather app</Text>
      </View>
      <Weather data={weather} fetchWeather={fetchWeather} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "blue",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  // header: { justifyContent: "center" },
});
