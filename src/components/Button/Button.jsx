import s from './Button.module.css'

export const Button = ({ className = '', children = '', id = '', onClick = () => null }) => {
  return (
    <button className={`${s.custom_button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
