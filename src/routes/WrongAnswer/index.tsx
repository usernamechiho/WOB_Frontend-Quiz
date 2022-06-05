import styles from './wrongAnswer.module.scss'

import { useState, useMount } from 'hooks'
import { useNavigate } from 'react-router-dom'

import store from 'storejs'

import SubmitButton from 'routes/_components/SubmitButton/SubmitButton'

interface WrongProps {
  question: string
}

const WrongAnswer = () => {
  const navigate = useNavigate()

  const [wrongAnswers, setWrongAnswers] = useState<WrongProps[]>([])

  useMount(() => {
    const getWrongAnswers = store.get('wrongAnswers')
    if (!getWrongAnswers) setWrongAnswers([])
    else setWrongAnswers(getWrongAnswers)
  })

  const handleClearStorage = () => {
    store.clear()
    navigate('/')
  }

  const wrongQuestions: JSX.Element[] = wrongAnswers.map((answer) => <li key={answer.question}>{answer.question}</li>)

  return (
    <div className={styles.wrongAnswerContainer}>
      <h1>Questions You Have to Study For</h1>
      <ul>{wrongQuestions}</ul>
      <SubmitButton onClick={handleClearStorage} content='Continue' />
    </div>
  )
}

export default WrongAnswer
