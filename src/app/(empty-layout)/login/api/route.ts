import { NextRequest, NextResponse } from 'next/server'
import { cookies as NextCookies } from 'next/headers'
import { firebaseAuth } from '@/services/firebase'

export async function POST(req: NextRequest) {
  const { idToken } = await req.json()

  const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days
  try {
    // Validate with Firebase Admin
    const sessionCookie = await firebaseAuth.createSessionCookie(idToken, { expiresIn })

    // Set _gsession server-side (httpOnly, secure, sameSite)
    const cookies = await NextCookies()
    cookies.set('_gsession', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn / 1000,
      path: '/',
      sameSite: 'lax',
    })

    return NextResponse.json({ status: 'success' }, { status: 200 })
  } catch (error) {
    console.error('Algum erro ocorreu ao setar o cookie de seção')
    console.error(error)

    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
