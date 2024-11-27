import style from './DarkButton.module.scss'

const DarkButton = ({ text, onClick, classNames = ''}) => {
  return (
    <button className={`${style.button} ${classNames}`} onClick={onClick}>{text}</button>
  )
}

export default DarkButton
