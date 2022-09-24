import { ReactComponent as Back } from '../../assets/back.svg'
import s from '../Expense/ExpenseMob.module.css'

export const IncomeMob = () => {
  return (
    <div>
      <button onClick={() => {}}>
        <Back />
      </button>
      <ul>
        <li className={s.item}>income</li>
      </ul>
    </div>
  )
}
