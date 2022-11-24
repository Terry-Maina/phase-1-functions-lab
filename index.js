// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    }
}
function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}
function distnaceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (50 - 42) * 264 === 2112
    } else {
        return (42 - 34) * 264 === 2112
    }
}
function calculatesFarePrice (start, destination) {
    const distance = distnaceTravelledInFeet (start, destination)

    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return 2.56
    } else if (distance > 2000 && distance < 2500 ) {
        return 25
    } else {
        "cannot travel that far"
    }
}
