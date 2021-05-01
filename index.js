const climbingStairs =  (totalSteps) => {
  if (totalSteps < 0) {
    return 0;
  } else if (totalSteps === 0 ) {
    return 1
  }
  return climbingStairs(totalSteps - 1) + climbingStairs(totalSteps - 2);
}
