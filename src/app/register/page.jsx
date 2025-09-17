'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else {
      setMessage('회원가입 성공! 이메일 확인 후 로그인하세요.')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button type="submit">회원가입</button>
      </form>
      <p>{message}</p>
    </div>
  )
}