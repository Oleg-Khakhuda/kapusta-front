import React from 'react'
import { BackgroundImg } from '../BackgroundImg/BackgroundImg'
import s from './Container.module.css'

export const Container = ({ children }) => {
  return (
    <>
      <BackgroundImg />
      <div className={s.container}>{children}</div>
    </>
  )
}
