export const calculateLevel = (xp) => {
  return Math.floor(xp / 100) + 1;
};

export const addXP = (player, amount) => {
  const newXP = player.xp + amount;
  return {
    ...player,
    xp: newXP,
    level: calculateLevel(newXP),
  };
};

export const addCoins = (player, amount) => {
  return {
    ...player,
    coins: player.coins + amount,
  };
};

export const addShards = (player, amount) => {
  return {
    ...player,
    shards: player.shards + amount,
  };
};
