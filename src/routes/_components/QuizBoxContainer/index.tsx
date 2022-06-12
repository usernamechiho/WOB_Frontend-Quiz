import styles from './quizBoxContainer.module.scss'

import { Outlet } from 'react-router-dom'

const QuizBoxContainer = () => {
  return (
    <div className={styles.quizBox}>
      <Outlet />
    </div>
  )
}
export default QuizBoxContainer
