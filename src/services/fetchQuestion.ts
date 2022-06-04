import questions from '../assets/jsons/questions.json'

import { shuffleArray } from 'utils/question'

export const get10RandomJavascriptQuestions = () => {
  const shuffledQuestions = shuffleArray(questions.javascript)

  console.log(shuffledQuestions.slice(0, 10))
  return shuffledQuestions.slice(0, 10)
}

export const get10RandomReactQuestions = () => {
  const shuffledQuestions = shuffleArray(questions.react)
  return shuffledQuestions.slice(0, 10)
}
