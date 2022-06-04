import { useState } from 'hooks'
import { useDispatch } from 'react-redux'
import { setScoreIncrease } from 'states/result'
import styles from './quizCardLayout.module.scss'

interface Props {
  quiz: {
    question: string
    a: string
    b: string
    c: string
    d: string
    answer: string
  }
  goToNextQuestion: () => void
}

const QuizCardLayout = ({ quiz, goToNextQuestion }: Props) => {
  const [answer, setAnswer] = useState('')

  const dispatch = useDispatch()

  const handleAnswer = (e: any) => {
    setAnswer(e.currentTarget.value)
  }

  const handleTotalScore = () => {
    goToNextQuestion()
    if (answer === quiz.answer) dispatch(setScoreIncrease())
    setAnswer('')
  }

  return (
    <>
      <div className={styles.questionContainer}>
        <h1>{quiz.question}</h1>
      </div>
      <ul>
        <li>
          <input type='radio' id='quiz-a' value='a' onChange={handleAnswer} checked={answer === 'a'} />
          <label htmlFor='quiz-a'>{quiz.a}</label>
        </li>
        <li>
          <input type='radio' id='quiz-b' value='b' onChange={handleAnswer} checked={answer === 'b'} />
          <label htmlFor='quiz-b'>{quiz.b}</label>
        </li>
        <li>
          <input type='radio' id='quiz-c' value='c' onChange={handleAnswer} checked={answer === 'c'} />
          <label htmlFor='quiz-c'>{quiz.c}</label>
        </li>
        <li>
          <input type='radio' id='quiz-d' value='d' onChange={handleAnswer} checked={answer === 'd'} />
          <label htmlFor='quiz-d'>{quiz.d}</label>
        </li>
      </ul>
      <button type='button' onClick={handleTotalScore} className={styles.submitButton}>
        Submit
      </button>
    </>
  )
}

export default QuizCardLayout
