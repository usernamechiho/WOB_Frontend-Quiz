import styles from './submitButton.module.scss'

interface ButtonProps {
  content: string
  onClick: () => void
}

const SubmitButton = ({ content, onClick }: ButtonProps) => {
  return (
    <button className={styles.submitButton} onClick={onClick} type='button'>
      {content}
    </button>
  )
}
export default SubmitButton
