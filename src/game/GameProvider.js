import React, { createContext, useState } from "react";
import { calculateLevel } from "./playerSystem";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    coins: 0,
    shards: 0,
    xp: 0,
    level: 1,
    inventory: [],
    streak: 0,
  });

  const updatePlayer = (newData) => {
    setPlayer((prev) => ({
      ...prev,
      ...newData,
      level: calculateLevel(newData.xp ?? prev.xp),
    }));
  };

  return (
    <GameContext.Provider value={{ player, updatePlayer }}>
      {children}
    </GameContext.Provider>
  );
};
