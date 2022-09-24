import { ReactComponent as Back } from '../../assets/back.svg'
import { DropSelect } from '../Select/Select'
import options from '../../optionsExpense.json'
import { ReactComponent as Calculator } from '../../assets/calculator.svg'
import { Button } from '../Button/Button'
import s from '../Expense/ExpenseMob.module.css'

export const ExpenseMob = () => {
  return (
    <div>
      <Back className={s.back} />
      <form className={s.form}>
        <label className={s.label}>
          <input type="text" placeholder="Опис товару" className={s.input} />
        </label>
        {/* <div className={s.select}> */}
        <DropSelect options={options} />
        {/* </div> */}
        <label>
          <input type="text" placeholder="00.00 ГРН" />
          <div>
            <Calculator />
          </div>
        </label>
        <ul className={s.button_bottom}>
          <li>
            <Button className={`${s.btn} ${s.expense_btn}`}>ДОДАТИ</Button>
          </li>
          <li>
            <Button className={`${s.btn} ${s.income_btn}`}>ОЧИСТИТИ</Button>
          </li>
        </ul>
      </form>
    </div>
  )
}
