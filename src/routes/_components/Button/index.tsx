import styles from './button.module.scss'
import cx from 'classnames'

interface ButtonProps {
  content: string
  category: string
  onClick?: () => void
}

const Button = ({ content, category, onClick }: ButtonProps) => {
  return (
    <button type='button' className={cx(styles.buttonComponent, styles[category])} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
