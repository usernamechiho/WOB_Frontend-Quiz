/* eslint-disable react/prop-types */
import styles from './wrongAnswerLayout.module.scss'

import { Correct, Incorrect, Normal } from 'assets/svgs'

import { Question, QuestionProps } from 'types/question'

interface Props {
  props: QuestionProps
}

const QUESTIONS = ['a', 'b', 'c', 'd']

const WrongAnswerLayout = ({ props }: Props) => {
  const { quiz, userAnswer } = props

  const IconWithAnswer: JSX.Element[] = QUESTIONS.map((opt) => (
    <p key={`question_${opt}`} className={styles.iconAndAnswer}>
      {quiz.answer === opt && (
        <>
          <Correct />
          <span style={{ color: '#007bff' }}>{quiz[opt as keyof Question]}</span>
        </>
      )}
      {quiz.answer !== userAnswer && userAnswer === opt && (
        <>
          <Incorrect />
          <span style={{ color: '#ff6464' }}>{quiz[opt as keyof Question]}</span>
        </>
      )}
      {quiz.answer !== opt && userAnswer !== opt && (
        <>
          <Normal />
          <span style={{ color: '#636366' }}>{quiz[opt as keyof Question]}</span>
        </>
      )}
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
