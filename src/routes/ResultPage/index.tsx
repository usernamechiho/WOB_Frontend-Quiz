import styles from './resultPage.module.scss'

import { useMount } from 'hooks'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getScore, setQuizReset, setTotalScoreReset } from 'states/result'
import { VictoryPie } from 'victory'

import SubmitButton from 'routes/_components/SubmitButton/SubmitButton'

const ResultPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const totalScore = useSelector(getScore)

  useMount(() => {
    dispatch(setQuizReset())
  })

  const resetTotalScore = () => {
    dispatch(setTotalScoreReset())
    navigate('/wrong-answer')
  }

  return (
    <div className={styles.resultPageContainer}>
      <div className={styles.scoreChartContainer}>
        <VictoryPie
          data={[
            { x: 'score', y: totalScore },
            { x: 'percent', y: 100 - totalScore },
          ]}
          colorScale={['#5e5ce6', '#c7c7cc']}
          style={{ labels: { fontSize: 25 } }}
        />
        <p>{totalScore} %</p>
      </div>
      <SubmitButton onClick={resetTotalScore} content='Check Answers !' />
    </div>
  )
}

export default ResultPage
