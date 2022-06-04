import { Question } from 'types/question'

export const shuffleArray = (array: Question[]) => {
  return array.sort(() => Math.random() - 0.5)
}
