import styles from './wrongAnswer.module.scss'
import store from 'storejs'
import { useState, useMount } from 'hooks'
import { useNavigate } from 'react-router-dom'

const WrongAnswer = () => {
  const navigate = useNavigate()

  const [wrongAnswers, setWrongAnswers] = useState<any[]>([])

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
      <h1>The Questions You Have to Study For</h1>
      <ul>{wrongQuestions}</ul>
      <button type='button' onClick={handleClearStorage} className={styles.submitButton}>
        Continue
      </button>
    </div>
  )
}

export default WrongAnswer
