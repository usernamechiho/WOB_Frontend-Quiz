import questions from '../assets/jsons/questions.json'

const get10RandomJavascriptQuestions = () => {
  return questions.javascript
}

const get10RandomReactQuestions = () => {
  return questions.react
}

export const get10RandomQuestions = (type: string | undefined) => {
  if (type === 'javascript') return get10RandomJavascriptQuestions()
  if (type === 'react') return get10RandomReactQuestions()
  return []
}
