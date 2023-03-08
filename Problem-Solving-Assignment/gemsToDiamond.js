/**
 *? problem 05;
 ** solution for another tricky Arithmetic operational calculation;
 */

function gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems) {
  if (typeof friendOneGems !== "number" || typeof friendTwoGems !== "number" || typeof friendThreeGems !== "number") {
    return "Provide a valid number for each parameter!";
  }
  const totalDiamond = friendOneGems * 21 + friendTwoGems * 32 + friendThreeGems * 43;
  if (totalDiamond >= 1000*2) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}

console.log(gemsToDiamond(100, 5, 1));
