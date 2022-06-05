import styles from './quizCardLayout.module.scss'

import { ChangeEvent, useState } from 'react'

import { useDispatch } from 'react-redux'
import { setScoreIncrease } from 'states/result'
import store from 'storejs'

import SubmitButton from '../SubmitButton/SubmitButton'

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
  const [userAnswer, setUserAnswer] = useState('')

  const dispatch = useDispatch()

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.currentTarget.value)
  }

  const handleTotalScore = () => {
    goToNextQuestion()
    if (userAnswer === quiz.answer) {
      dispatch(setScoreIncrease())
    } else if (userAnswer !== quiz.answer) {
      const isStorageEmpty = store.get('wrongAnswers')
      if (!isStorageEmpty) {
        store.set('wrongAnswers', [{ question: quiz.question }])
      } else store.set('wrongAnswers', [...isStorageEmpty, { question: quiz.question }])
    }
    setUserAnswer('')
  }

  return (
    <>
      <div className={styles.questionContainer}>
        <h1>{quiz.question}</h1>
      </div>
      <ul>
        <li>
          <input type='radio' id='quiz-a' value='a' onChange={handleAnswer} checked={userAnswer === 'a'} />
          <label htmlFor='quiz-a'>{quiz.a}</label>
        </li>
        <li>
          <input type='radio' id='quiz-b' value='b' onChange={handleAnswer} checked={userAnswer === 'b'} />
          <label htmlFor='quiz-b'>{quiz.b}</label>
        </li>
        <li>
          <input type='radio' id='quiz-c' value='c' onChange={handleAnswer} checked={userAnswer === 'c'} />
          <label htmlFor='quiz-c'>{quiz.c}</label>
        </li>
        <li>
          <input type='radio' id='quiz-d' value='d' onChange={handleAnswer} checked={userAnswer === 'd'} />
          <label htmlFor='quiz-d'>{quiz.d}</label>
        </li>
      </ul>
      <SubmitButton onClick={handleTotalScore} content='Submit' />
    </>
  )
}

export default QuizCardLayout
