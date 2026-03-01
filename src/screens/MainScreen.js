import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameContext } from "../game/GameProvider";

export default function MainScreen() {
  const { player } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CITYLOOT</Text>
      <Text style={styles.stat}>Level: {player.level}</Text>
      <Text style={styles.stat}>XP: {player.xp}</Text>
      <Text style={styles.stat}>Coins: {player.coins}</Text>
      <Text style={styles.stat}>Shards: {player.shards}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#38bdf8",
    fontWeight: "bold",
    marginBottom: 20,
  },
  stat: {
    fontSize: 18,
    color: "white",
    marginVertical: 5,
  },
});
