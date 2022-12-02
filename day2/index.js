import fs from 'fs';

const textPractice = fs.readFileSync("day2/practice_input.txt", "utf-8");
const text1 = fs.readFileSync("day2/puzzle_input_1.txt", "utf-8");

const shapeScores = {
  "X": {
    "A": 4,
    "B": 1,
    "C": 7
  },
  "Y": {
    "A": 8,
    "B": 5,
    "C": 2
  },
  "Z": {
    "A": 3,
    "B": 9,
    "C": 6
  }
}

const shapeScoresWithMoreInfo = {
  "X": {
    "A": 3,
    "B": 1,
    "C": 2
  },
  "Y": {
    "A": 4,
    "B": 5,
    "C": 6
  },
  "Z": {
    "A": 8,
    "B": 9,
    "C": 7
  }
}

const getRounds = (text) => {
  return text.split(/\r?\n/)
}

const puzzle1Solver = (text) => {
  const rounds = getRounds(text)
  const totalScore = rounds.reduce(
    (accumulator, currentValue) => {
      const shapes = currentValue.split(" ");
      const score = shapeScores[shapes[1]][shapes[0]];
      accumulator += score;
      return accumulator;
    },
    0
  )
  return totalScore;
}

const puzzle2Solver = (text) => {
  const rounds = getRounds(text)
  const totalScore = rounds.reduce(
    (accumulator, currentValue) => {
      const shapes = currentValue.split(" ");
      const score = shapeScoresWithMoreInfo[shapes[1]][shapes[0]];
      accumulator += score;
      return accumulator;
    },
    0
  )
  return totalScore;
}

const day2 = () => {
  console.log('Day 2')
  const practiceSolution1 = puzzle1Solver(textPractice);
  console.log("Practice: ", practiceSolution1);
  const puzzleSolution1 = puzzle1Solver(text1);
  console.log("Puzzle 1: ", puzzleSolution1);
  const practiceSolution2 = puzzle2Solver(textPractice);
  console.log("Practice: ", practiceSolution2);
  const puzzleSolution2 = puzzle2Solver(text1);
  console.log("Puzzle 2: ", puzzleSolution2);
}

export default day2;