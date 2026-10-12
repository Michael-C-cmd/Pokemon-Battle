export const getRndNum = (maxNum, amount = 2) => {
  let numArr = [];
  for (let i = 0; i < amount; i++) {
    const newRndNum = Math.floor(Math.random() * maxNum + 1);
    numArr = [...numArr, newRndNum];
  }
  return numArr;
};
