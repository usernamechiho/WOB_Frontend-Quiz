import styles from './quizSelect.module.scss'

import { useMount } from 'hooks'
import store from 'storejs'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setQuizStart, setQuizReset } from 'states/result'

import { JavascriptImage, ReactImage } from 'assets/svgs'
import Button from 'routes/_components/Button'

const QuizSelect = () => {
  const dispatch = useDispatch()

  const gameStartButton = () => {
    dispatch(setQuizStart())
  }

  useMount(() => {
    dispatch(setQuizReset())
    store.set('wrongAnswers', [])
  })

  return (
    <div className={styles.buttonContainer}>
      <h1>Frontend Quiz !</h1>
      <div className={styles.javascriptContainer}>
        <JavascriptImage style={{ marginRight: '10px' }} />
        <Link to='quiz-for/javascript'>
          <Button content='JavaScript' category='javascript' onClick={gameStartButton} />
        </Link>
      </div>
      <div className={styles.reactContainer}>
        <ReactImage style={{ marginRight: '10px' }} />
        <Link to='quiz-for/react'>
          <Button content='React' category='react' onClick={gameStartButton} />
        </Link>
      </div>
    </div>
  )
}

export default QuizSelect
