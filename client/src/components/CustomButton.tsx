import { IButtonProps } from '../types/PropTypes'
import '../styles/CustomButton.css'

const CustomButton = ({name}: IButtonProps) => {
  return (
    <button>{name}</button>
  )
}

export default CustomButton
