'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import styles from './login.module.scss'

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/dashboard')
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        <h2>관리자계정 로그인</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Id"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            name='id'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            name='pw'
          />
          <button type="submit" className={styles.loginBtn}>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}