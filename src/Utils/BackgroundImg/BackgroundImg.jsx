import s from '../BackgroundImg/BackgroundImg.module.css'
import bg1 from '../../assets/bg-kapusta.svg'
import kapusta from '../../assets/kapustaMob.svg'
import bg2 from '../../assets/bg-kapusta2.svg'
import bgTab from '../../assets/bg-kapustaTab.svg'
import bgTab2 from '../../assets/bg-kapusta2Tab.svg'

export const BackgroundImg = () => {
  const isAuth = true

  return (
    <div>
      <div className={s.container_main}></div>
      {!isAuth && <div className={s.main} style={{ backgroundImage: `url(${bg1})` }}></div>}
      <div className={s.mainTab} style={{ backgroundImage: `url(${bgTab})` }}></div>
      {!isAuth && <div className={s.main_kapusta} style={{ backgroundImage: `url(${kapusta})` }}></div>}
      {!isAuth && <div className={s.bg2} style={{ backgroundImage: `url(${bg2})` }}></div>}
      <div className={s.bgTab2} style={{ backgroundImage: `url(${bgTab2})` }}></div>
    </div>
  )
}
