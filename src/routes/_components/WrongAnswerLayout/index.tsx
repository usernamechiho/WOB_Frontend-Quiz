import styles from './wrongAnswerLayout.module.scss'

import { QuestionProps } from 'types/question'

import { Correct, Incorrect, Normal } from 'assets/svgs'

const QUESTIONS = ['a', 'b', 'c', 'd']

const WrongAnswerLayout = ({ props }: any) => {
  const { quiz, userAnswer } = props

  const IconWithAnswer: JSX.Element[] = QUESTIONS.map((opt) => (
    <p key={`question_${opt}`}>
      {quiz.answer === opt && <Correct />}
      {quiz.answer !== userAnswer && userAnswer === opt && <Incorrect />}
      {quiz.answer !== opt && userAnswer !== opt && <Normal />}
      {opt + quiz[opt]}
    </p>
  ))

  return (
    <li className={styles.answerList}>
      <h5>{quiz.question}</h5>
      {IconWithAnswer}
    </li>
  )
}

export default WrongAnswerLayout
