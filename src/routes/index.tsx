import styles from './routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Header from 'GNB'
import QuizBoxContainer from './QuizBoxContainer'
import StartPage from './StartPage'
import QuizItem from './QuizItem'

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <QuizBoxContainer>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='quiz-item' element={<QuizItem />} />
          </Routes>
        </QuizBoxContainer>
      </main>
    </div>
  )
}

export default App
