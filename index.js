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

function calculatesFarePrice(startingBlock, endingBlock) {
	const distance = distanceTravelledInFeet(startingBlock, endingBlock)
	if (distance <= 400) {
		return 0}
	else if (distance > 400 && distance <= 2000) {
		return distance * .02 }
	else if (distance > 2500) {
		return 'cannot travel that far'
    }
}
