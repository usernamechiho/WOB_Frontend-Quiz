import questions from '../assets/jsons/questions.json'

import { shuffleArray } from 'utils/question'

const get10RandomJavascriptQuestions = () => {
  const shuffledQuestions = shuffleArray(questions.javascript)
  return shuffledQuestions.slice(0, 11)
}

const get10RandomReactQuestions = () => {
  const shuffledQuestions = shuffleArray(questions.react)
  return shuffledQuestions.slice(0, 11)
}

export const get10RandomQuestions = (type: string | undefined) => {
  if (type === 'javascript') return get10RandomJavascriptQuestions()
  if (type === 'react') return get10RandomReactQuestions()
  return []
}
