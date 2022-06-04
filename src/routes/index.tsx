import styles from './routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Header from 'GNB'
import QuizBoxContainer from './_components/QuizBoxContainer'
import QuizSelect from './QuizSelect'
import QuizCard from './QuizCard'
import ResultPage from './ResultPage'

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <QuizBoxContainer>
          <Routes>
            <Route path='/' element={<QuizSelect />} />
            <Route path='quiz-for/:language' element={<QuizCard />} />
            <Route path='result' element={<ResultPage />} />
          </Routes>
        </QuizBoxContainer>
      </main>
    </div>
  )
}

export default App
