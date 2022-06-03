import styles from './quizBoxContainer.module.scss'

interface Children {
  children: React.ReactNode
}

const QuizBoxContainer = ({ children }: Children) => {
  return <div className={styles.quizBox}>{children}</div>
}
export default QuizBoxContainer
