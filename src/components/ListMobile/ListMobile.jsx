import { ReactComponent as Delete } from '../../assets/delete1.svg'
import s from '../ListMobile/ListMobile.module.css'

export const ListMobile = () => {
  return (
    <div>
      <ul>
        <li className={s.item}>
          <div className={s.item_box}>
            <div className={s.box}>
              <p className={s.title}>Метро</p>
              <div className={s.date_option}>
                <p className={s.date}>05.09.2019</p>
                <p className={s.category}>Транспорт</p>
              </div>
            </div>
            <div className={s.income_del}>
              <p className={s.price}>- 30.00 грн.</p>
              <Delete />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
