import React from 'react'
import { Main } from '../Main/Main'
import { Modal } from '../Modal/Modal'

const isAuth = true

export const Login = () => {
  return <>{!isAuth ? <Modal /> : <Main />}</>
}
