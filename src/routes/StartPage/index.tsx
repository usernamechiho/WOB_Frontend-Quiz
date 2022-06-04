import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div>
      프론트 엔드 퀴즈
      <Link to='/quiz-select'>
        <button type='button'>시작</button>
      </Link>
    </div>
  )
}

export default StartPage
