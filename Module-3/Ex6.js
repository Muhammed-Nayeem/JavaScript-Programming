for (;;) {
  var rand = Math.round(Math.random() * 10);
  if (rand === 9) {
    console.log("Winner Winner Chicken Dinner!");
    break;
  } else {
    console.log("You got rand: " + rand);
  }
}
