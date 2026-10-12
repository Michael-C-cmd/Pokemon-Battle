const fightReducer = (target, attacker) => {
  const newTarget = { ...target, hp: target.hp - attacker.attack / 10 };
  return newTarget;
};

export const fightFunction = (oponent1, oponent2) => {
  const fightInterval = setInterval(() => {
    oponent2 = fightReducer(oponent2, oponent1);
    if (oponent2.hp < 0) {
      console.log(`${oponent1.name} has won the fight, with ${oponent1.hp} HP`);
      console.log("Fight ended!");
      clearInterval(fightInterval);
      console.log(`${oponent1.name}: ${oponent1.hp} HP left`);
      console.log(`${oponent2.name}: ${oponent2.hp} HP left`);
      return;
    }
    oponent1 = fightReducer(oponent1, oponent2);
    if (oponent1.hp < 0) {
      console.log(`${oponent2.name} has won the fight, with ${oponent2.hp} HP`);
      console.log("Fight ended!");
      clearInterval(fightInterval);
      console.log(`${oponent1.name}: ${oponent1.hp} HP left`);
      console.log(`${oponent2.name}: ${oponent2.hp} HP left`);
      return;
    }
    console.log(`${oponent1.name}: ${oponent1.hp} HP left`);
    console.log(`${oponent2.name}: ${oponent2.hp} HP left`);
  }, 1000);
};
