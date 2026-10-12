import { getRndNum } from "./rndNum.mjs";
import { fetchFighters } from "./fetch.mjs";
import { fightFunction } from "./fight.mjs";

const maxNum = 1025;
const randomNums = getRndNum(maxNum);
// * vllt. in der Zukunft mit Teams: const team1 = randomNums.filter((num, idx) => idx % 2 === 0);
// * vllt. in der Zukunft mit Teams: const team2 = randomNums.filter((num, idx) => idx % 2 !== 0);
console.log(randomNums);

const makeFight = async () => {
  const oponents = await fetchFighters(randomNums);
  console.log(oponents);
  fightFunction(...oponents);
};

makeFight();
