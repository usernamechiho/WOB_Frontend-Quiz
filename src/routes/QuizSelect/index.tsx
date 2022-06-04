import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setQuizStart, setQuizReset } from 'states/result'

import { useMount } from 'hooks'

const QuizSelect = () => {
  const dispatch = useDispatch()

  const gameStartButton = () => {
    dispatch(setQuizStart())
  }

  useMount(() => {
    dispatch(setQuizReset())
  })

  return (
    <div>
      <Link to='quiz-for/javascript'>
        <button type='button' onClick={gameStartButton}>
          자바스크립트
        </button>
      </Link>
      <Link to='quiz-for/react'>
        <button type='button' onClick={gameStartButton}>
          리액트
        </button>
      </Link>
    </div>
  )
}

export default QuizSelect
