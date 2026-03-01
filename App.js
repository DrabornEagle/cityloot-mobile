import React from "react";
import { GameProvider } from "./src/game/GameProvider";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <GameProvider>
      <MainScreen />
    </GameProvider>
  );
}
