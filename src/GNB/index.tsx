import styles from './header.module.scss'

import { useSelector } from 'react-redux'
import { getIsStart, getStage } from 'states/result'

const Header = () => {
  const isStart = useSelector(getIsStart)
  const currentStage = useSelector(getStage)

  return (
    <header>
      <nav className={styles.navContainer}>
        <h1>Frontend Quiz</h1>
        {isStart && (
          <>
            <p>{currentStage} / 10</p>
            <button type='button'>Quit</button>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
