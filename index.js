function distanceFromHqInBlocks (block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  if (block > 42) {
    return (block - 42) * 264;
  } else {
    return (42 - block) * 264;
  }
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock > endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) * 264;
  }
}
