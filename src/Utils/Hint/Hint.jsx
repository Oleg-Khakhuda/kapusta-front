import s from '../Hint/Hint.module.css'

export const Hint = () => {
  return (
    <div className={s.hint}>
      <p className={s.hint_title}>Привіт! Для початку роботи внеси поточний баланс свого рахунку!</p>
      <p className={s.hint_desc}>Ти не можеш тратити гроші поки їх у тебе немає :)</p>
    </div>
  )
}
