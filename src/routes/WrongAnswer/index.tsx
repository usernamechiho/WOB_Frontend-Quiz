import styles from './wrongAnswer.module.scss'

import { useState, useMount } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { QuestionProps } from 'types/question'

import store from 'storejs'

import WrongAnswerLayout from '../_components/WrongAnswerLayout'
import { Error } from 'assets/svgs'

const WrongAnswer = () => {
  const navigate = useNavigate()

  const [wrongAnswers, setWrongAnswers] = useState<QuestionProps[]>([])

  useMount(() => {
    const getWrongAnswers = store.get('wrongAnswers')
    if (!getWrongAnswers) setWrongAnswers([])
    else setWrongAnswers(getWrongAnswers)
  })

  const handleClearStorage = () => {
    store.clear()
    navigate('/')
  }

  const WrongQuestions: JSX.Element[] = wrongAnswers.map((answer) => (
    <WrongAnswerLayout props={answer} key={answer.quiz.question} />
  ))

  return (
    <div className={styles.wrongAnswerContainer}>
      <Error />
      {WrongQuestions}
      <button type='button' onClick={handleClearStorage}>
        Quiz Again !
      </button>
    </div>
  )
}

export default WrongAnswer
