import styles from './routes.module.scss'
import { Routes, Route, Outlet } from 'react-router-dom'

import Header from 'GNB'
import QuizBoxContainer from './_components/QuizBoxContainer'
import StartPage from './StartPage'
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
            <Route path='/' element={<StartPage />} />
            <Route path='quiz-select' element={<Outlet />}>
              <Route path='' element={<QuizSelect />} />
              <Route path='quiz-for/:language' element={<QuizCard />} />
            </Route>
            <Route path='result' element={<ResultPage />} />
          </Routes>
        </QuizBoxContainer>
      </main>
    </div>
  )
}

export default App
