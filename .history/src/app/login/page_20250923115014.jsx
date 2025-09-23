'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

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
    <div>
      <h2>관리자계정 로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Id"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{
            border: '1px solid #fff',
            background: 'transparent'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={{
            border: '1px solid #fff',
            background: 'transparent'
          }}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}