'use client'

import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useInput } from '@app/hooks/useInput'

import style from './Login.module.scss'

const Login = () => {
  const router = useRouter()

  const submitForm = async (e) => {
    e.preventDefault()

    if (!login || !password) {
      alert('Пожалуйста, заполните все поля')
      return
    }
    
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          email: login,
          password,
        }
      )
      if (res.status == 200) {
        Cookies.set('token', res?.data?.token)
      }
      alert(' успешно вошли!')
      resetLogin()
      resetPassword()
      router.push('/panel')
    } catch (error) {
      alert('Произошла ошибка', error)
      console.log(error)
    }
    // Clear input values
  }

  const { value: login, bind: loginBind, reset: resetLogin } = useInput()
  const {
    value: password,
    bind: passwordBind,
    reset: resetPassword,
  } = useInput()

  return (
    <section className={style.login}>
      <form>
        <input
          className={style.input}
          {...loginBind}
          type='text'
          placeholder='Логин'
        />
        <input
          {...passwordBind}
          className={style.input}
          type='password' // Changed to type='password' for security
          placeholder='Пароль'
        />
        <button onClick={(e) => submitForm(e)} className={style.submit}>
          Войти
        </button>
      </form>
    </section>
  )
}

export default Login
