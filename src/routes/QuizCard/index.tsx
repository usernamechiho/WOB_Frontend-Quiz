import { useState, useMount } from 'hooks'

import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStageIncrease, setQuizStart } from 'states/result'
import { get10RandomQuestions } from 'services/fetchQuestion'

import QuizCardLayout from 'routes/_components/QuizCardLayout'

const QuizCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { language } = useParams()

  const [idx, setIdx] = useState(0)

  useMount(() => {
    dispatch(setQuizStart())
  })

  const goToNextQuestion = () => {
    if (idx === 9) navigate('/result')
    else {
      dispatch(setStageIncrease())
      setIdx((prev) => prev + 1)
    }
  }

  const quiz = get10RandomQuestions(language)

  return <div>{quiz && <QuizCardLayout quiz={quiz[idx]} goToNextQuestion={goToNextQuestion} />}</div>
}

export default QuizCard
