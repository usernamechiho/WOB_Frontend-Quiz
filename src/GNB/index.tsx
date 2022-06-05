import styles from './header.module.scss'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { getIsStart, getStage } from 'states/result'

const Header = () => {
  const isStart = useSelector(getIsStart)
  const currentStage = useSelector(getStage)

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <h1>Frontend Quiz !</h1>
        {isStart && <p>{currentStage} / 10</p>}
        {isStart && (
          <Link to='/'>
            <button type='button'>Quit</button>
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
