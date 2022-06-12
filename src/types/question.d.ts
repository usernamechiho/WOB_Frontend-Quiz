export interface Question {
  question: string
  a: string
  b: string
  c: string
  d: string
  answer: string
}

export interface QuestionProps {
  quiz: Question
  userAnswer: string | undefined
}
