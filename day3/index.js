import fs from 'fs';

const textPractice = fs.readFileSync("day3/practice_input.txt", "utf-8");
const text1 = fs.readFileSync("day3/puzzle_input_1.txt", "utf-8");

const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getBags = (text) => {
  return text.split(/\r?\n/)
}

const splitBag = (bag) => {
  return [
    bag.slice(0, bag.length/2), 
    bag.slice(bag.length/2, bag.length) 
  ]
}

const findCommonItem = (compartments) => {
  const commonItems = compartments.reduce(
    (commonItems, compartment, index) => {
      if (index == 0) return compartment
      return commonItems.split("").reduce(
        (newCommonItems, commonItem) => {
          if (compartment.includes(commonItem)) {
            return newCommonItems + commonItem;
          } else {
            return newCommonItems;
          }
        },
        ""
      )
    },
    ""
  )
  return commonItems[0];
}

const puzzle1Solver = (text) => {
  const bags = getBags(text);
  return bags.reduce(
    (totalPriority, bag) => {
      const compartments = splitBag(bag)
      const commonItem = findCommonItem(compartments)
      return totalPriority + items.indexOf(commonItem) + 1
    },
    0
  )
}

const puzzle2Solver = (text) => {
  const bags = getBags(text);
  let totalPriority = 0;
  for(let i=0; i<bags.length; i=i+3) {
    const commonItem = findCommonItem([bags[i], bags[i+1], bags[i+2]])
    totalPriority += items.indexOf(commonItem) + 1
  }
  return totalPriority;
}

const day3 = () => {
  console.log('Day 3')
  const practiceSolution1 = puzzle1Solver(textPractice);
  console.log("Practice: ", practiceSolution1);
  const puzzleSolution1 = puzzle1Solver(text1);
  console.log("Puzzle 1: ", puzzleSolution1);
  const practiceSolution2 = puzzle2Solver(textPractice);
  console.log("Practice: ", practiceSolution2);
  const puzzleSolution2 = puzzle2Solver(text1);
  console.log("Puzzle 2: ", puzzleSolution2);
}

export default day3;