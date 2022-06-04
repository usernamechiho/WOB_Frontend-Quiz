import { useMount, useUnmount } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getScore, setQuizReset, setTotalScoreReset } from 'states/result'

const ResultPage = () => {
  const dispatch = useDispatch()
  const totalScore = useSelector(getScore)

  useMount(() => {
    dispatch(setQuizReset())
  })

  useUnmount(() => {
    dispatch(setTotalScoreReset())
  })

  console.log(totalScore)

  return <div>{totalScore}</div>
}

export default ResultPage
