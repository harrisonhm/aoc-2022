import fs from 'fs';

const textPractice = fs.readFileSync("day4/practice_input.txt", "utf-8");
const text1 = fs.readFileSync("day4/puzzle_input_1.txt", "utf-8");

const getPairs = (text) => {
  return text.split(/\r?\n/)
}

const getSection = (text) => {
  const startEnd = text.split("-")
  return {
    start: Number(startEnd[0]), 
    end: Number(startEnd[1]), 
    length: Number(startEnd[1]) - Number(startEnd[0])
  }
}

const checkForOverlap = assignmentSections => {
  let contained = false;
  assignmentSections.forEach((containingSection, containingIndex) => {
    if (contained) return;
    assignmentSections.forEach((containedSection, containedIndex) => {
      if (containedIndex == containingIndex || contained) return
      contained = 
        containingSection.length >= containedSection.length &&
        containingSection.end >= containedSection.end &&
        containingSection.start <= containedSection.start;
    })
  })
  return contained;
}

const checkForPartialOverlap = assignmentSections => {
  let overlap = false;
  assignmentSections.forEach((overlappingSection, overlappingIndex) => {
    if (overlap) return;
    assignmentSections.forEach((overlappedSection, overlappedIndex) => {
      if (overlappedIndex == overlappingIndex || overlap) return
      overlap = 
        overlappingSection.start <= overlappedSection.end &&
        overlappingSection.end >= overlappedSection.start;
    })
  })
  return overlap;
}

const puzzle1Solver = (text) => {
  const pairs = getPairs(text)
  const noOfCompleteOverlaps = pairs.reduce(
    (completeOverlaps, setOfAssignments) => {
      const assignments = setOfAssignments.split(",")
      const assignmentSections = assignments.map(assignment => {
        return getSection(assignment);
      })
      return completeOverlaps + checkForOverlap(assignmentSections);
    },
    0
  )
  return noOfCompleteOverlaps;
}

const puzzle2Solver = (text) => {
  const pairs = getPairs(text)
  const noOfCompleteOverlaps = pairs.reduce(
    (completeOverlaps, setOfAssignments) => {
      const assignments = setOfAssignments.split(",")
      const assignmentSections = assignments.map(assignment => {
        return getSection(assignment);
      })
      return completeOverlaps + checkForPartialOverlap(assignmentSections);
    },
    0
  )
  return noOfCompleteOverlaps;
}

const day4 = () => {
  console.log('Day 4')
  const practiceSolution1 = puzzle1Solver(textPractice);
  console.log("Practice: ", practiceSolution1);
  const puzzleSolution1 = puzzle1Solver(text1);
  console.log("Puzzle 1: ", puzzleSolution1);
  const practiceSolution2 = puzzle2Solver(textPractice);
  console.log("Practice: ", practiceSolution2);
  const puzzleSolution2 = puzzle2Solver(text1);
  console.log("Puzzle 2: ", puzzleSolution2);
}

export default day4;