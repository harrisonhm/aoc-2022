import fs from 'fs';

const textPractice = fs.readFileSync("day1/practice_input.txt", "utf-8");
const text1 = fs.readFileSync("day1/puzzle_input_1.txt", "utf-8");

const getCalorieAmountsSums = text => {
  const calorieAmounts = text.split(/\r?\n/)
  return calorieAmounts.reduce(
    (accumulator, currentValue) => {
      if (currentValue == '') {
        accumulator.push(0)
      } else {
        accumulator[accumulator.length - 1] = accumulator[accumulator.length - 1] + Number(currentValue)
      }
      return accumulator;
    },
    [0]
  )
}

const puzzle1Solver = (text) => {
  const calorieAmountsSums = getCalorieAmountsSums(text)
  return Math.max(...calorieAmountsSums);
}

const puzzle2Solver = (text) => {
  const calorieAmountsSums = getCalorieAmountsSums(text)
  const calorieAmountsSumsSorted = calorieAmountsSums.sort((a, b) => b - a)
  return calorieAmountsSumsSorted[0] + calorieAmountsSumsSorted[1] + calorieAmountsSumsSorted[2]
}

const day1 = () => {
  console.log('Day 1')
  const practiceSolution = puzzle1Solver(textPractice);
  console.log("Practice: ", practiceSolution);
  const puzzleSolution1 = puzzle1Solver(text1);
  console.log("Puzzle 1: ", puzzleSolution1);
  const puzzleSolution2 = puzzle2Solver(text1);
  console.log("Puzzle 2: ", puzzleSolution2);
}

export default day1;